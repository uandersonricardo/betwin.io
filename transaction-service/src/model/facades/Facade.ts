import { container, inject, injectable, singleton } from "tsyringe";

import IAccountRepository from "../account/IAccountRepository";
import AccountControl from "../controls/AccountControl";
import CashControl from "../controls/CashControl";
import DepositControl from "../controls/DepositControl";
import TransactionControl from "../controls/TransactionControl";
import IRepositoryFactory from "../factories/IRepositoryFactory";
import ITransactionRepository from "../transaction/ITransactionRepository";

@injectable()
@singleton()
class Facade {
  private repositoryFactory;
  private accountControl;
  private cashControl;
  private depositControl;
  private transactionControl;

  constructor(
    @inject("RepositoryFactory") repositoryFactory: IRepositoryFactory
  ) {
    this.repositoryFactory = repositoryFactory;

    container.register<IAccountRepository>("AccountRepository", {
      useValue: this.repositoryFactory.createAccountRepository()
    });
    container.register<ITransactionRepository>("TransactionRepository", {
      useValue: this.repositoryFactory.createTransactionRepository()
    });

    this.accountControl = container.resolve(AccountControl);
    this.cashControl = container.resolve(CashControl);
    this.depositControl = container.resolve(DepositControl);
    this.transactionControl = container.resolve(TransactionControl);
  }

  public async cash(userId: string) {
    return await this.cashControl.cash(userId);
  }

  public async createAccount(userId: string) {
    return await this.accountControl.createAccount(userId);
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

  public async transactions(filter: string) {
    const transactions = await this.transactionControl.transactions(filter);
    return transactions;
  }
}

export default Facade;
