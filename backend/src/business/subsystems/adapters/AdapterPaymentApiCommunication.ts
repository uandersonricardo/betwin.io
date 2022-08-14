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
        success: environment.appUrl,
        failure: environment.appUrl,
        pending: environment.appUrl
      },
      external_reference: transactionId
    };

    const response = await mercadopago.preferences.create(preference);

    return response.body.init_point;
  }
}

export default AdapterPaymentApiCommunication;
