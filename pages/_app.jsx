import "fontsource-roboto";
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
