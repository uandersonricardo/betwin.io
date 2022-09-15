import mercadopago from "mercadopago";

import environment from "./environment";

mercadopago.configure({
  access_token: environment.mercadoPagoToken || ""
});

export default mercadopago;
