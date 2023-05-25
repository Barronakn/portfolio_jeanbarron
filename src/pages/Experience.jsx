import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const Experience = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>Où j'ai travaillé</h1>
        <div className="experience_container">
          <div className="experience_1">
            <NavLink
              id="freelance"
              className={(nav) => (nav.isActive ? "link-active" : "")}
            >
              Freelance
            </NavLink>
            <ol>
              <li>
                Développement et maintenance du code pour les sites Web internes
                et clients utilisant principalement HTML, CSS, Sass, JavaScript
                et React.
              </li>
              <li>
                Sites testés manuellement dans divers navigateurs et appareils
                mobiles pour garantir la compatibilité et la réactivité entre
                navigateurs.
              </li>
              <br />
              <br />
            </ol>
          </div>
          <div className="experience_1">
            <NavLink
              id="freelance"
              className={(nav) => (nav.isActive ? "link-active" : "")}
            >
              Freelance
            </NavLink>
            <ol>
              <li>
                Développement et maintenance du code pour les sites Web internes
                et clients utilisant principalement HTML, CSS, Sass, JavaScript
                et React.
              </li>
              <li>
                Sites testés manuellement dans divers navigateurs et appareils
                mobiles pour garantir la compatibilité et la réactivité entre
                navigateurs.
              </li>
              <br />
              <br />
            </ol>
          </div>
          <div className="experience_1">
            <NavLink
              id="freelance"
              className={(nav) => (nav.isActive ? "link-active" : "")}
            >
              Freelance
            </NavLink>
            <ol>
              <li>
                Développement et maintenance du code pour les sites Web internes
                et clients utilisant principalement HTML, CSS, Sass, JavaScript
                et React.
              </li>
              <li>
                Sites testés manuellement dans divers navigateurs et appareils
                mobiles pour garantir la compatibilité et la réactivité entre
                navigateurs.
              </li>
              <br />
              <br />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
