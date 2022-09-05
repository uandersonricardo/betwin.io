import { injectable } from "tsyringe";

import ISubsystemPaymentApi from "../../subsystems/ISubsystemPaymentApi";
import AccountCollection from "../account/AccountCollection";
import AdapterPaymentApi from "../adapters/AdapterPaymentApi";
import TransactionCollection from "../transaction/TransactionCollection";

@injectable()
class DepositControl {
  private transactionCollection;
  private accountCollection;

  constructor(
    transactionCollection: TransactionCollection,
    accountCollection: AccountCollection
  ) {
    this.transactionCollection = transactionCollection;
    this.accountCollection = accountCollection;
  }

  public async generatePayment(
    method: string,
    value: number,
    transactionId: string
  ) {
    let paymentSubsystem: ISubsystemPaymentApi;

    if (method === "mercadopago") {
      paymentSubsystem = new AdapterPaymentApi();
    } else {
      throw new Error("Method not valid");
    }

    const paymentResponse = await paymentSubsystem.generatePayment(
      value,
      transactionId
    );

    return paymentResponse;
  }

  public async createTransactionDeposit(
    method: string,
    value: number,
    userId: string
  ) {
    const transaction = await this.transactionCollection.insert(
      "deposit",
      method,
      value,
      userId,
      "pending",
      new Date()
    );

    return transaction;
  }

  public async handleDepositEvent(method: string, paymentId: string) {
    let paymentSubsystem: ISubsystemPaymentApi;

    if (method === "mercadopago") {
      paymentSubsystem = new AdapterPaymentApi();
    } else {
      throw new Error("Method not valid");
    }

    const payment = await paymentSubsystem.getPaymentInfo(paymentId);

    const oldStatus = await this.transactionCollection.getStatus(
      payment.external_reference
    );

    const transaction = await this.transactionCollection.updateStatus(
      payment.external_reference,
      payment.status
    );

    if (oldStatus !== "approved" && payment.status === "approved") {
      await this.accountCollection.refoundCash(
        transaction.getUserId(),
        transaction.getValue()
      );
    }
  }
}

export default DepositControl;
