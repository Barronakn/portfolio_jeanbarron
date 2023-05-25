import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Fashion from "../assets/Fashion.png";
import LandingPage from "../assets/LandingPage.png";
import aknmode from "../assets/aknmode.png";
import country from "../assets/country.png";
import enjoy from "../assets/enjoy.png";
import fylla from "../assets/fylla.png";
import skillhub from "../assets/skillhub.png";
import boutique from "../assets/boutique.png";
import sigma from "../assets/sigma.png";
import adept from "../assets/adept.png";

const Projet = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>Mes réalisations</h1>
        <div className="projet_container">
          <div className="projets">
            {/* <div className="project_1 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://fashion-sage-nu.vercel.app/"
                className="project"
              >
                <img src={Fashion} alt="Fashion-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://fashion-sage-nu.vercel.app/"
                className="hover:underline"
              >
                Fashion
              </NavLink>
            </div> */}
            <div className="project_2 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://aknmode-barronakn.vercel.app/"
                className="project"
              >
                <img src={aknmode} alt="aknmode-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://aknmode-barronakn.vercel.app/"
                className="hover:underline"
              >
                Akn mode
              </NavLink>
            </div>
            <div className="project_3 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/Enjoy/"
                className="project"
              >
                <img src={enjoy} alt="enjoy-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/Enjoy/"
                className="hover:underline"
              >
                Enjoy
              </NavLink>
            </div>
            <div className="project_4 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://monde-barronakn.vercel.app/"
                className="project"
              >
                <img src={country} alt="country-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://monde-barronakn.vercel.app/"
                className="hover:underline"
              >
                Country App
              </NavLink>
            </div>
            <div className="project_5 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://fylla-1.vercel.app/"
                className="project"
              >
                <img src={fylla} alt="fylla-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://fylla-1.vercel.app/"
                className="hover:underline"
              >
                Fylla
              </NavLink>
            </div>
            <div className="project_6 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/Competence-Center/"
                className="project"
              >
                <img src={skillhub} alt="skillhub-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/Competence-Center/"
                className="hover:underline"
              >
                Skillhub
              </NavLink>
            </div>
            <div className="project_7 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/boutiquemode/"
                className="project"
              >
                <img src={boutique} alt="boutique-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/boutiquemode/"
                className="hover:underline"
              >
                Boutique Mode
              </NavLink>
            </div>
            <div className="project_8 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://landing-tau-dusky.vercel.app/"
                className="project"
              >
                <img src={LandingPage} alt="LandingPage-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://landing-tau-dusky.vercel.app/"
                className="hover:underline"
              >
                Landing Page
              </NavLink>
            </div>
            <div className="project_9 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/Sigma/"
                className="project"
              >
                <img src={sigma} alt="sigma-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/Sigma/"
                className="hover:underline"
              >
                Sigma
              </NavLink>
            </div>
            <div className="project_10 flex justify-center items-center flex-col gap-2">
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/Adept/"
                className="project"
              >
                <img src={adept} alt="adept-img" loading="lazy" />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://barronakn.github.io/Adept/"
                className="hover:underline"
              >
                Adept
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projet;
