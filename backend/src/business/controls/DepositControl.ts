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

  public generatePayment(method: string, value: number, user: User) {
    let paymentSubsystem: ISubsystemPaymentApiCommunication;
    if (method === "mercadopago") {
      paymentSubsystem = new AdapterPaymentApiCommunication();
    } else {
      throw new Error("Method not valid");
    }

    const paymentResponse = paymentSubsystem.generatePayment(value, user);
    return paymentResponse;
  }

  public async createTransactionDeposit(
    method: string,
    value: number,
    user: User
  ) {
    await this.transactionCollection.insert(method, value, user);
  }
}

export default DepositControl;
