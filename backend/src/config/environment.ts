export default {
  clientUrl: process.env.CLIENT_URL,
  isProduction: process.env.NODE_ENV === "production",
  appUrl: process.env.APP_URL,
  mongoUrl: process.env.MONGO_URL,
  mercadoPagoToken: process.env.MERCADOPAGO_TOKEN,
  proxyHost: process.env.PROXY_HOST,
  proxyPort: parseInt(process.env.PROXY_PORT || "80")
};
