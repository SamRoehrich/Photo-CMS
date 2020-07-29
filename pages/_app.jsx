import "fontsource-roboto";
import "react-image-gallery/styles/css/image-gallery.css";
import Theme from "../components/Theme";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;
