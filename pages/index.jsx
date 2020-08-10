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
    process.env.NODE_ENV == "production"
      ? PRODUCTION_API_URL + "photos/"
      : "http://localhost:5000/photos/"
  );
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
