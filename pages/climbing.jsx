import Gallery from "../components/Gallery/Gallery";
import { useEffect } from "react";

const ClimbingPage = ({ pics }) => {
  useEffect(() => {
    document.title = "Kyle Garrett Photo | Climbing";
  });
  return <Gallery pics={pics} />;
};
export default ClimbingPage;

export async function getStaticProps() {
  const res = await fetch(
    process.env.NODE_ENV == "production"
      ? PRODUCTION_API_URL + "photos/climbing"
      : "http://localhost:5000/photos/climbing"
  );
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
