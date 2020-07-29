import Gallery from "../components/Gallery";

const ClimbingPage = ({ pics }) => {
  return <Gallery pics={pics} />;
};
export default ClimbingPage;

export async function getStaticProps() {
  const res = await fetch(
    `https://kyle-garrett-photo-server.herokuapp.com/photos/climbing`
  );
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
