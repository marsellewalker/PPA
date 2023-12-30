import Footer from "../footer/footer";
import Header2 from "../header/header";

const Contact = () => {
  return (
    <>
      <Header2 />
      <div className="container">
        <div>
          <h1>
            Paisley <span className="highlight">Puppet </span>Adventures
          </h1>
        </div>
        <main>
          <div className="container2">

            <h1 className="contact">Contact Us</h1>

            <form action="/action_page.php" target="_blank">
              
                <label>Name </label>
                <input type="text" name="Name" required />
              
              
                <label>Email </label>
                <input type="text" name="Email" required />
              
              
                <label>Subject </label>
                <input name="Subject" required />
              
              
                <label>Message</label>
                <textarea name="Message" required></textarea>
              
              <button type="submit">Send</button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
