import "fontsource-roboto";
import "react-alice-carousel/lib/alice-carousel.css";
import Theme from "../components/Theme";
import Layout from "../components/Layout";
import { Auth0Provider } from "@auth0/auth0-react";
import { GalleryState } from "../components/Gallery/GalleryContext";

function MyApp({ Component, pageProps }) {
  return (
    <GalleryState>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </GalleryState>
  );
}

export default MyApp;
