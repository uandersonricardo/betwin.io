export default {
  clientUrl: process.env.CLIENT_URL,
  isProduction: process.env.NODE_ENV === "production",
  baseDomain: process.env.BASE_DOMAIN
};
