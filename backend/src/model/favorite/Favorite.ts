class Favorite {
  private userId;
  private matchId;

  constructor(userId: string, matchId: string) {
    this.matchId = matchId;
    this.userId = userId;
  }

  public getMatchId() {
    return this.matchId;
  }

  public setMatchId(matchId: string) {
    this.matchId = matchId;
  }

  public getUserId() {
    return this.userId;
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }
}

export default Favorite;
