import Gallery from "../components/Gallery/Gallery";
import { useEffect } from "react";

const HomePage = ({ pics }) => {
  useEffect(() => {
    document.title = "Kyle Garrett Photo | Home";
  });
  return <Gallery pics={pics} />;
};
export default HomePage;

export async function getStaticProps() {
  const res = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/photos/"
  );
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
