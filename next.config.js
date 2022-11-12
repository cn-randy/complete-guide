/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_host: "127.0.0.1:27017",
        mongodb_database: "complete-guide",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_host: "mongodb+srv",
      mongodb_database: "complete-guide",
      mongodb_username: "twohalls_user",
      mongodb_password: "tHrhaladmin",
      mongodb_cluster: "cluster0.wbsvj.mongodb.net",
    },
  };
};

module.exports = nextConfig;
