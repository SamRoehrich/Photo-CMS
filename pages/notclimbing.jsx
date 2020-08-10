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
    "https://kyle-garrett-photo-server.herokuapp.com/photos/notclimbing"
  );
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
