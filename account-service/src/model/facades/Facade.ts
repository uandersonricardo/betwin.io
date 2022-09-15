import { container, inject, injectable, singleton } from "tsyringe";

import IAccountRepository from "../account/IAccountRepository";
import BetOdd from "../bet/BetOdd";
import IBetRepository from "../bet/IBetRepository";
import CashControl from "../controls/CashControl";
import DepositControl from "../controls/DepositControl";
import LoginControl from "../controls/LoginControl";
import MatchControl from "../controls/MatchControl";
import MeControl from "../controls/MeControl";
import RegisterControl from "../controls/RegisterControl";
import TransactionControl from "../controls/TransactionControl";
import IRepositoryFactory from "../factories/IRepositoryFactory";
import IFavoriteRepository from "../favorite/IFavoriteRepository";
import ITransactionRepository from "../transaction/ITransactionRepository";
import IUserRepository from "../user/IUserRepository";

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
  private transactionControl;

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
    this.transactionControl = container.resolve(TransactionControl);
  }

  public async register(
    username: string,
    password: string,
    email: string,
    cpf: string
  ) {
    return await this.registerControl.register(username, password, email, cpf);
  }

  public async login(username: string, password: string) {
    return await this.loginControl.login(username, password);
  }

  public async registerSession(userId: string) {
    return await this.loginControl.registerSession(userId);
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

  public async favorite(userId: string, matchId: string) {
    await this.matchControl.favorite(userId, matchId);
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

  public async transactions(filter: string) {
    const transactions = await this.transactionControl.transactions(filter);
    return transactions;
  }
}

export default Facade;
