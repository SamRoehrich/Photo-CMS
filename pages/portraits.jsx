import Gallery from "../components/Gallery/Gallery";
import Theme from "../components/Theme";
import Layout from "../components/Layout";
import { buildTheme } from "../utils/buildTheme";

const PortraitsPage = ({ pics, theme }) => {
  return (
    <Theme theme={theme}>
      <Layout>
        <Gallery pics={pics} />
      </Layout>
    </Theme>
  );
};
export default PortraitsPage;

export async function getStaticProps() {
  const res = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/photos/portraits"
  );
  const pics = await res.json();
  const apiTheme = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/theme"
  );
  const jsonTheme = await apiTheme.json();
  const theme = buildTheme(jsonTheme);

  return {
    props: {
      pics,
      theme,
    },
  };
}
