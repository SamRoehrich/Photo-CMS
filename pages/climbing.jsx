import Gallery from "../components/Gallery/Gallery";
import { useEffect } from "react";
import Theme from "../components/Theme";
import Layout from "../components/Layout";

const ClimbingPage = ({ pics, theme }) => {
  useEffect(() => {
    document.title = "Kyle Garrett Photo | Climbing";
  });
  return (
    <Theme theme={theme}>
      <Layout>
        <Gallery pics={pics} />
      </Layout>
    </Theme>
  );
};
export default ClimbingPage;

export async function getStaticProps() {
  const res = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/photos/climbing"
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
