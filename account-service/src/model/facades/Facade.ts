import { container, inject, injectable, singleton } from "tsyringe";

import IAccountRepository from "../account/IAccountRepository";
import AccountControl from "../controls/AccountControl";
import CashControl from "../controls/CashControl";
import DebitControl from "../controls/DebitControl";
import DepositControl from "../controls/DepositControl";
import RefoundControl from "../controls/RefoundControl";
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
  private debitControl;
  private refoundControl;

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
    this.debitControl = container.resolve(DebitControl);
    this.refoundControl = container.resolve(RefoundControl);
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

  public async debit(userId: string, value: number) {
    await this.debitControl.debit(userId, value);
  }

  public async refound(userId: string, value: number) {
    await this.refoundControl.refound(userId, value);
  }
}

export default Facade;
