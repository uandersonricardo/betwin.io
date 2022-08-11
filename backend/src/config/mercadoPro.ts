import mercadopago from "mercadopago";

import environment from "../config/environment";

mercadopago.configure({
  access_token: environment.mercadoProToken || ""
});

export default mercadopago;
