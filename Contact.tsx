import Footer from "./Header and Footer/Footer";
import Header from "./Header and Footer/Header";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>
            Paisley <span className="highlight">Puppet </span>Adventures
          </h1>

          <Header />
        </div>
        <main>
          <div className="background_container3">
            <h1 className="cool">Paisley Puppet Adventures</h1>

            <div className="w3-center w3-padding-64" id="contact">
              <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
                Contact Us
              </span>
            </div>

            <form
              className="w3-container"
              action="/action_page.php"
              target="_blank"
            >
              <div className="w3-section">
                <label>Name</label>
                <input
                  className="w3-input w3-border w3-hover-border-black"
                  type="text"
                  name="Name"
                  required
                />
              </div>
              <div className="w3-section">
                <label>Email</label>
                <input
                  className="w3-input w3-border w3-hover-border-black"
                  type="text"
                  name="Email"
                  required
                />
              </div>
              <div className="w3-section">
                <label>Subject</label>
                <input
                  className="w3-input w3-border w3-hover-border-black"
                  name="Subject"
                  required
                />
              </div>
              <div className="w3-section">
                <label>Message</label>
                <textarea
                  className="w3-input w3-border w3-hover-border-black"
                  name="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w3-button w3-block w3-black">
                Send
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
