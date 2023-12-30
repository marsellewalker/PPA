import Header2 from "../header/header";
import Footer from "../footer/footer";


const Home = () => {
  return (
    <>
      <Header2 />

      <div className="container">
        <div>
          <h1>
            Paisley <span className="highlight">Puppet </span>Adventures
          </h1>
        </div>

        <main></main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
