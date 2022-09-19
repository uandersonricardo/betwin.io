import { injectable } from "tsyringe";

import environment from "../../config/environment";
import ISubsystemPaymentApi from "../../subsystems/ISubsystemPaymentApi";
import SubsystemMercadoPagoApi from "../../subsystems/SubsystemMercadoPagoApi";

@injectable()
class AdapterMercadoPagoApi implements ISubsystemPaymentApi {
  private mercadoPagoSubsystem;

  constructor(mercadoPagoSubsystem: SubsystemMercadoPagoApi) {
    this.mercadoPagoSubsystem = mercadoPagoSubsystem;
  }

  public async generatePayment(value: number, transactionId: string) {
    const preference = {
      items: [
        {
          title: "Depósito betwin.io",
          unit_price: value,
          quantity: 1
        }
      ],
      back_urls: {
        success: environment.clientUrl + "/transactions",
        failure: environment.clientUrl + "/transactions",
        pending: environment.clientUrl + "/transactions"
      },
      external_reference: transactionId,
      statement_descriptor: "betwin.io",
      notification_url: environment.appUrl + "/deposit/event"
    };

    const response = await this.mercadoPagoSubsystem.createPreference(
      preference
    );

    return response.init_point;
  }

  public async getPaymentInfo(paymentId: string) {
    const response = await this.mercadoPagoSubsystem.findPayment(paymentId);

    return response.body;
  }
}

export default AdapterMercadoPagoApi;
