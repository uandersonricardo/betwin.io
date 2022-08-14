declare let MercadoPago: any;

const mercadopago = new MercadoPago(
  process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY,
  {
    locale: "pt-BR"
  }
);

export default mercadopago;
