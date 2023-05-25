import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>Contactez-moi</h1>
        <div className="contact_container">
          <h2>Envoyez-moi un message !</h2>
          <p>
            Ma boîte de réception est toujours ouverte. Que vous coulez faire
            une commande ou que vous ayez une question ou encore que vous
            souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous
            répondre !
          </p>
          <form action="">
            <div className="input">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Vore email"
                />
              </div>
            </div>
            <div className="message">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button>Envoyez</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
