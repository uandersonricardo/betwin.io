import environment from "../../../config/environment";
import mercadopago from "../../../config/mercadopago";
import ISubsystemPaymentApiCommunication from "../ISubsystemPaymentApiCommunication";

class AdapterPaymentApiCommunication
  implements ISubsystemPaymentApiCommunication
{
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
      notification_url: "https://eocidxvarv1c9r.m.pipedream.net" // environment.appUrl + "/deposit/event"
    };

    const response = await mercadopago.preferences.create(preference);

    return response.body.init_point;
  }

  public async getPaymentInfo(paymentId: string) {
    const response = await mercadopago.payment.findById(Number(paymentId));

    return response.body;
  }
}

export default AdapterPaymentApiCommunication;
