import Gallery from "../components/Gallery/Gallery";

const PortraitsPage = ({ pics }) => {
  return <Gallery pics={pics} />;
};
export default PortraitsPage;

export async function getStaticProps() {
  const res = await fetch(
    process.env.NODE_ENV == "production"
      ? process.env.PRODUCTION_API_URL + "photos/portraits"
      : "http://localhost:5000/photos/portraits"
  );
  const pics = await res.json();

  return {
    props: {
      pics,
    },
  };
}
