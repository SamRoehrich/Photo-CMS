import Gallery from "../components/Gallery/Gallery";

const PortraitsPage = ({ pics }) => {
  return <Gallery pics={pics} />;
};
export default PortraitsPage;

export async function getStaticProps() {
  const res = await fetch(
    `https://kyle-garrett-photo-server.herokuapp.com/photos/portraits`
  );
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
