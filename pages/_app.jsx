import "fontsource-roboto";
import Theme from "../components/Theme";
import Layout from "../components/Layout";
import { Auth0Provider } from "@auth0/auth0-react";
import { GalleryState } from "../components/Gallery/GalleryContext";
import { createMuiTheme } from "@material-ui/core";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-vqkf1a2g.auth0.com"
      clientId="tUIXxPS5ZX1vwDzkzaWd5M58nc17HmO1"
      redirectUri={"https://kgp-hoto.vercel.app/admin"}
    >
      <GalleryState>
        <Theme theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </GalleryState>
    </Auth0Provider>
  );
}

export default MyApp;

export async function getStaticProps() {
  const apiTheme = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/theme"
  );
  await apiTheme.json();
  const builtTheme = await builtTheme(apiTheme);
  const theme = createMuiTheme(builtTheme);

  return {
    props: {
      theme,
    },
  };
}
