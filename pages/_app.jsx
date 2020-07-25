import "fontsource-roboto";

import Header from "../components/Header";
import Theme from "../components/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
