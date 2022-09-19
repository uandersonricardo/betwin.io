import { injectable } from "tsyringe";

import mercadopago from "../config/mercadopago";

@injectable()
class SubsystemMercadoPagoApi {
  public async createPreference(preference: any) {
    const response = await mercadopago.preferences.create(preference);

    return response.body;
  }

  public async findPayment(paymentId: string) {
    const response = await mercadopago.payment.findById(Number(paymentId));

    return response.body;
  }
}

export default SubsystemMercadoPagoApi;
