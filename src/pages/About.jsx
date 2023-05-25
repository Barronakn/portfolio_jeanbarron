import Navigation from "../components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>À propos</h1>
        <div className="about_container">
          <div className="about">
            <p className="text-xl">
              Je suis un développeur web expérimenté et je serai ravi de
              travailler avec vous sur votre projet. Mon expertise inclut la
              création de sites web modernes et fonctionnels, le développement
              côté client avec HTML, CSS, JavaScript, Tailwindcss et ReactJs
              ainsi que la programmation côté serveur avec PHP. Je suis prêt à
              mettre en œuvre vos idées et à apporter des solutions techniques
              pour atteindre les objectifs du projet. N'hésitez pas à me faire
              part de vos besoins et de vos attentes, et ensemble, nous créerons
              une solution web de qualité.
            </p>
          </div>
          <div className="about_pic">
            <img src="./pic.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
