import environment from "../../../config/environment";
import mercadopago from "../../../config/mercadoPro";
import User from "../../entities/User";
import iSubsystemPaymentApiCommunication from "../ISubsystemPaymentApiCommunication";

class AdapterPaymentApiCommunication
  implements iSubsystemPaymentApiCommunication
{
  public generatePayment(value: number, user: User) {
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
      }
    };

    const mercadoPreference = mercadopago.preferences
      .create(preference)
      .then(function (response) {
        return {
          id: response.body.id
        };
      })
      .catch(function (error) {
        return error;
      });
    return mercadoPreference;
  }
}

export default AdapterPaymentApiCommunication;
