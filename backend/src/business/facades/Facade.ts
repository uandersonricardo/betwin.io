import { container, inject, injectable, singleton } from "tsyringe";

import IAccountRepository from "../../data/repositoryInterfaces/IAccountRepository";
import IBetRepository from "../../data/repositoryInterfaces/IBetRepository";
import IFavoriteRepository from "../../data/repositoryInterfaces/IFavoriteRepository";
import ITransactionRepository from "../../data/repositoryInterfaces/ITransactionRepository";
import IUserRepository from "../../data/repositoryInterfaces/IUserRepository";
import CashControl from "../controls/CashControl";
import DepositControl from "../controls/DepositControl";
import LoginControl from "../controls/LoginControl";
import MatchControl from "../controls/MatchControl";
import MeControl from "../controls/MeControl";
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
  private meControl;
  private cashControl;
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
    this.meControl = container.resolve(MeControl);
    this.cashControl = container.resolve(CashControl);
    this.matchControl = container.resolve(MatchControl);
    this.depositControl = container.resolve(DepositControl);
  }

  public async register(user: UserFields) {
    return await this.registerControl.register(user);
  }

  public async login(username: string, password: string) {
    return await this.loginControl.login(username, password);
  }

  public async registerSession(user: User) {
    return await this.loginControl.registerSession(user);
  }

  public async me(id: string) {
    return await this.meControl.me(id);
  }

  public async cash(userId: string) {
    return await this.cashControl.cash(userId);
  }

  public async bet(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    await this.matchControl.bet(userId, matchId, odd, value);
  }

  public async favorite(user: User, match: Match) {
    await this.matchControl.favorite(user, match);
  }

  public async createTransactionDeposit(
    method: string,
    value: number,
    userId: string
  ) {
    const transaction = await this.depositControl.createTransactionDeposit(
      method,
      value,
      userId
    );

    const paymenteResponse = await this.depositControl.generatePayment(
      method,
      value,
      transaction.getId()
    );

    return paymenteResponse;
  }

  public async handleDepositEvent(method: string, paymentId: string) {
    await this.depositControl.handleDepositEvent(method, paymentId);
  }

  public async matches(filter: string) {
    const matches = await this.matchControl.matches(filter);
    return matches;
  }

  public async match(matchId: string) {
    const match = await this.matchControl.match(matchId);
    return match;
  }
}

export default Facade;
