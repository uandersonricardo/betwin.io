export default {
  clientUrl: process.env.CLIENT_URL,
  isProduction: process.env.NODE_ENV === "production",
  appUrl: process.env.APP_URL,
  mongoUrl: process.env.MONGO_URL,
  mercadoProToken: process.env.MERCADOPAGO_TOKEN
};
