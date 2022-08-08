import BetOdd from "../entities/BetOdd";
import Match from "../entities/Match";
import User from "../entities/User";
import UserFields from "../entities/UserFields";
import DepositControl from "./DepositControl";
import LoginControl from "./LoginControl";
import MatchControl from "./MatchControl";
import RegisterControl from "./RegisterControl";

class Facade {
  private registerControl;
  private loginControl;
  private matchControl;
  private depositControl;

  constructor(
    registerControl: RegisterControl,
    loginControl: LoginControl,
    matchControl: MatchControl,
    depositControl: DepositControl
  ) {
    this.registerControl = registerControl;
    this.loginControl = loginControl;
    this.matchControl = matchControl;
    this.depositControl = depositControl;
  }

  public register(user: UserFields) {
    this.registerControl.register(user);
  }

  public login(username: string, password: string) {
    this.loginControl.login(username, password);
  }

  // Lack the user parameter
  public registersession() {
    this.loginControl.registerSession();
  }

  public bet(user: User, match: Match, odd: BetOdd, value: number) {
    this.matchControl.bet(user, match, odd, value);
  }

  public favorite(user: User, match: Match) {
    this.matchControl.favorite(user, match);
  }

  public createTransactionDeposit(method: string, value: number, user: User) {
    this.depositControl.createTransactionDeposit(method, value, user);
  }
}

export default Facade;
