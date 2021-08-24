import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: "dev-vqkf1a2g.auth0.com",
  clientId: "lqZ59xedEisHPnG1VtkY8yvlxo0CpyQ0",
  clientSecret:
    "hO06UEOi-p1Iq-2BME72S6Qnc4PeDB-pV28wvJj8CsKTLvzNN7F5Wem04oviCiQa",
  scope: "openid profile",
  redirectUri: "https://kgp-hoto.vercel.app/api/callback",
  postLogoutRedirectUri: "https://kgp-hoto.vercel.app/",
  session: {
    cookieSecret:
      "somesupersecretstringnowihaveaddedmorecharactersbecausetheyreallywantthiscookiesecrettobesuperduperfuckingsecretboi",
    cookieLifetime: 60 * 60 * 8,
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false,
  },
  oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 10000,
  },
});
