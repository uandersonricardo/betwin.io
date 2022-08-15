import { match } from "assert";

import axios from "axios";
import { injectable } from "tsyringe";

import allowedSports from "../../config/sports";
import { MatchInfo, Odd, OddCategory, Sport } from "../../types";
import BetOdd from "../entities/BetOdd";
import Match from "../entities/Match";
import User from "../entities/User";
import AccountCollection from "../entityCollections/AccountCollection";
import BetCollection from "../entityCollections/BetCollection";
import FavoriteCollection from "../entityCollections/FavoriteCollection";

@injectable()
class MatchControl {
  private betCollection: BetCollection;
  private accountCollection: AccountCollection;
  private favoriteCollection: FavoriteCollection;

  constructor(
    betCollection: BetCollection,
    accountCollection: AccountCollection,
    favoriteCollection: FavoriteCollection
  ) {
    this.betCollection = betCollection;
    this.accountCollection = accountCollection;
    this.favoriteCollection = favoriteCollection;
  }

  public async matches(filter: string) {
    const { data } = await axios.get(
      `https://eu-offering.kambicdn.org/offering/v2018/ub/listView${filter}.json?lang=pt_BR&market=BR`
    );

    const groupByCompetitions = (events: any[]) => {
      const competitions: any[] = [];
      events.forEach(item => {
        const sportId = item.event.path[0].termKey;

        if (!allowedSports.find(sport => sport === sportId)) {
          return;
        }

        const id = item.event.path.map((path: any) => path.termKey).join("/");
        const collection = competitions.find(
          competition => competition.id === id
        );
        if (!collection) {
          competitions.push({
            id,
            name: item.event.path[item.event.path.length - 1].name,
            matches: [item]
          });
        } else {
          collection.matches.push(item);
        }
      });
      return competitions;
    };

    const groupBySports = (competitions: any[]) => {
      const sports: any[] = [];
      competitions.forEach(competition => {
        const item = competition.matches[0];
        const id = item.event.path[0].termKey;

        const collection = sports.find(sport => sport.id === id);
        if (!collection) {
          sports.push({
            id,
            name: item.event.path[0].name,
            competitions: [competition]
          });
        } else {
          collection.competitions.push(competition);
        }
      });
      return sports;
    };

    const groupedMatches: Sport[] = groupBySports(
      groupByCompetitions(data.events)
    ).map((sport: any) => ({
      ...sport,
      competitions: sport.competitions.map((competiton: any) => ({
        ...competiton,
        matches: competiton.matches.map((match: any) => ({
          id: match.event.id,
          home: match.event.homeName,
          away: match.event.awayName,
          date: new Date(match.event.start),
          status: match.event.state,
          odds:
            match.betOffers.length > 0
              ? match.betOffers[0].outcomes?.map((outcome: any) => ({
                  odd: outcome.odds,
                  label: outcome.label,
                  type: outcome.type,
                  status: outcome.status
                }))
              : undefined,
          score: match.liveData?.score
            ? {
                home: match.liveData.score.home,
                away: match.liveData.score.away,
                info: match.liveData.score.info
              }
            : undefined,
          currentTime: match.liveData?.matchClock
        }))
      }))
    }));

    return groupedMatches;
  }

  public async match(matchId: string) {
    const { data } = await axios.get(
      `https://eu-offering.kambicdn.org/offering/v2018/ub/betoffer/event/${matchId}.json?lang=pt_BR`
    );
    const groupByCategory = (data: any) => {
      const categories: any[] = [];
      data.betOffers.forEach((offer: any) => {
        const id = offer.criterion.id;
        const collection = categories.find(categories => categories.id === id);
        if (!collection) {
          categories.push({
            id,
            name: offer.criterion.label,
            main: offer.tags.includes("MAIN"),
            odds: [...offer.outcomes]
          });
        } else {
          collection.odds.push(...offer.outcomes);
        }
      });
      return categories;
    };

    const { data: liveData } = await axios.get(
      `https://eu-offering.kambicdn.org/offering/v2018/ub/event/${matchId}/livedata.json?lang=pt_BR&market=BR`
    );

    const oddsMatch: MatchInfo = {
      id: matchId,
      home: data.events[0].homeName,
      away: data.events[0].awayName,
      status: data.events[0].state,
      date: data.events[0].start,
      currentTime: liveData.liveData?.matchClock,
      score: liveData.liveData?.score
        ? {
            home: liveData.liveData.score.home,
            away: liveData.liveData.score.away,
            info: liveData.liveData.score.info
          }
        : undefined,
      categories: groupByCategory(data).map((category: any) => ({
        ...category,
        odds: category.odds.map((outcome: any) => ({
          id: outcome.id,
          odd: outcome.odds,
          label: outcome.label,
          type: outcome.type,
          status: outcome.status,
          line: outcome.line,
          homescore: outcome.homeScore,
          awayscore: outcome.awayScore,
          lowerLimit: outcome.lowerLimit,
          upperLimit: outcome.upperLimit
        }))
      })),
      competition: {
        id: data.events[0].path.map((path: any) => path.termKey).join("/"),
        name: data.events[0].path[data.events[0].path.length - 1].name
      }
    };

    return oddsMatch;
  }

  public async bet(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    await this.accountCollection.debitCash(userId, value);

    try {
      await this.betCollection.insert(userId, matchId, odd, value);
    } catch (err) {
      await this.accountCollection.refoundCash(userId, value);
      throw err;
    }
  }

  public async favorite(userId: string, matchId: string) {
    await this.favoriteCollection.insert(userId, matchId);
  }
}

export default MatchControl;
