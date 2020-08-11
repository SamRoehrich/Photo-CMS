import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: "dev-vqkf1a2g.auth0.com",
  clientId: "tUIXxPS5ZX1vwDzkzaWd5M58nc17HmO1",
  clientSecret:
    "S_ZT_L5iWqCTkirqcE0vrs2NybsW2O5wDcbsVp9I8rdAm52rh2RRJVJeZ3XZdYT3",
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
