import { inject, injectable } from "tsyringe";

import AdapterPaymentApiCommunication from "../../business/subsystems/adapters/AdapterPaymentApiCommunication";
import User from "../entities/User";
import TransactionCollection from "../entityCollections/TransactionCollection";
import ISubsystemPaymentApiCommunication from "../subsystems/ISubsystemPaymentApiCommunication";

@injectable()
class DepositControl {
  private transactionCollection;

  constructor(transactionCollection: TransactionCollection) {
    this.transactionCollection = transactionCollection;
  }

  public async generatePayment(
    method: string,
    value: number,
    transactionId: string
  ) {
    let paymentSubsystem: ISubsystemPaymentApiCommunication;

    if (method === "mercadopago") {
      paymentSubsystem = new AdapterPaymentApiCommunication();
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
}

export default DepositControl;
