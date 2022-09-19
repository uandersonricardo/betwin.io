export default {
  clientUrl: process.env.CLIENT_URL,
  isProduction: process.env.NODE_ENV === "production",
  appUrl: process.env.APP_URL,
  proxyHost: process.env.PROXY_HOST,
  proxyPort: parseInt(process.env.PROXY_PORT || "80")
};
