import "fontsource-roboto";
import Theme from "../components/Theme";
import Layout from "../components/Layout";
import { GalleryState } from "../components/Gallery/GalleryContext";
import { UserProvider, useFetchUser } from "../utils/user";

function MyApp({ Component, pageProps }) {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={(user, loading)}>
      <GalleryState>
        {/* <Theme> */}
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
        {/* </Theme> */}
      </GalleryState>
    </UserProvider>
  );
}

export default MyApp;
