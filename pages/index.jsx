import Gallery from "../components/Gallery/Gallery";

const HomePage = ({ pics }) => {
  return <Gallery pics={pics} />;
};
export default HomePage;

export async function getStaticProps() {
  const res = await fetch(
    `https://kyle-garrett-photo-server.herokuapp.com/photos/`
  );
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
