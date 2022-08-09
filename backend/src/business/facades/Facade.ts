import { container, inject, injectable, singleton } from "tsyringe";

import IAccountRepository from "../../data/repositoryInterfaces/IAccountRepository";
import IBetRepository from "../../data/repositoryInterfaces/IBetRepository";
import IFavoriteRepository from "../../data/repositoryInterfaces/IFavoriteRepository";
import ITransactionRepository from "../../data/repositoryInterfaces/ITransactionRepository";
import IUserRepository from "../../data/repositoryInterfaces/IUserRepository";
import DepositControl from "../controls/DepositControl";
import LoginControl from "../controls/LoginControl";
import MatchControl from "../controls/MatchControl";
import RegisterControl from "../controls/RegisterControl";
import BetOdd from "../entities/BetOdd";
import Match from "../entities/Match";
import User from "../entities/User";
import UserFields from "../entities/UserFields";
import IRepositoryFactory from "../factories/IRepositoryFactory";

@injectable()
@singleton()
class Facade {
  private repositoryFactory;
  private registerControl;
  private loginControl;
  private matchControl;
  private depositControl;

  constructor(
    @inject("RepositoryFactory") repositoryFactory: IRepositoryFactory
  ) {
    this.repositoryFactory = repositoryFactory;

    container.register<IAccountRepository>("AccountRepository", {
      useValue: this.repositoryFactory.createAccountRepository()
    });
    container.register<IBetRepository>("BetRepository", {
      useValue: this.repositoryFactory.createBetRepository()
    });
    container.register<IFavoriteRepository>("FavoriteRepository", {
      useValue: this.repositoryFactory.createFavoriteRepository()
    });
    container.register<ITransactionRepository>("TransactionRepository", {
      useValue: this.repositoryFactory.createTransactionRepository()
    });
    container.register<IUserRepository>("UserRepository", {
      useValue: this.repositoryFactory.createUserRepository()
    });

    this.registerControl = container.resolve(RegisterControl);
    this.loginControl = container.resolve(LoginControl);
    this.matchControl = container.resolve(MatchControl);
    this.depositControl = container.resolve(DepositControl);
  }

  public register(user: UserFields) {
    return this.registerControl.register(user);
  }

  public login(username: string, password: string) {
    return this.loginControl.login(username, password);
  }

  public registerSession(user: User) {
    return this.loginControl.registerSession(user);
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
