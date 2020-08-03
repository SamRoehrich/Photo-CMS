import "fontsource-roboto";
import "react-image-gallery/styles/css/image-gallery.css";
import Theme from "../components/Theme";
import Layout from "../components/Layout";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-vqkf1a2g.auth0.com"
      clientId="tUIXxPS5ZX1vwDzkzaWd5M58nc17HmO1"
      redirectUri="http://localhost:3000/admin"
    >
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Auth0Provider>
  );
}

export default MyApp;
