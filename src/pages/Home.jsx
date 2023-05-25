import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <h1>Acceuil</h1>
      <div className="home_container">
        <p className="presentation">Bonjour, je suis</p>
        <p className="name mb-5">
          Jean-Barron ALOKPON,
          <span className="desc"> développeur web.</span>
        </p>
        <p className="prof">
          Je réalise des sites web super jolis et adulés par les moteurs de
          recherche.
        </p>
      </div>
    </>
  );
};

export default Home;
