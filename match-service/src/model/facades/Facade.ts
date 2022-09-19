import { container, injectable, singleton } from "tsyringe";

import MatchControl from "../controls/MatchControl";

@injectable()
@singleton()
class Facade {
  private matchControl;

  constructor() {
    this.matchControl = container.resolve(MatchControl);
  }

  public async matches(partner: string, filter: string) {
    const matches = await this.matchControl.matches(partner, filter);
    return matches;
  }

  public async match(partner: string, matchId: string) {
    const match = await this.matchControl.match(partner, matchId);
    return match;
  }
}

export default Facade;
