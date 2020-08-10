import Gallery from "../components/Gallery/Gallery";
import { useEffect } from "react";

const NotClimbingPage = ({ pics }) => {
  useEffect(() => {
    document.title = "Kyle Garrett Photo | Not Climbing";
  });
  return <Gallery pics={pics} />;
};
export default NotClimbingPage;

export async function getStaticProps() {
  const res = await fetch(
    process.env.NODE_ENV == "production"
      ? PRODUCTION_API_URL + "photos/notclimbing"
      : "http://localhost:5000/photos/notclimbing"
  );
  const pics = await res.json();
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
