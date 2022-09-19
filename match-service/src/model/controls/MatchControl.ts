import { container, injectable } from "tsyringe";

import ISubsystemMatchesApi from "../../subsystems/ISubsystemMatchesApi";
import AdapterKambiApi from "../adapters/AdapterKambiApi";

@injectable()
class MatchControl {
  public async matches(partner: string, filter: string) {
    let matchesSubsystem: ISubsystemMatchesApi;

    if (partner === "kambi") {
      matchesSubsystem = container.resolve(AdapterKambiApi);
    } else {
      throw new Error("Partner not valid");
    }

    const data = await matchesSubsystem.getGroupedMatches(filter);

    return data;
  }

  public async match(partner: string, matchId: string) {
    let matchesSubsystem: ISubsystemMatchesApi;

    if (partner === "kambi") {
      matchesSubsystem = container.resolve(AdapterKambiApi);
    } else {
      throw new Error("Partner not valid");
    }

    const data = await matchesSubsystem.getMatch(matchId);

    return data;
  }
}

export default MatchControl;
