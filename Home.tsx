import Header from "./Header and Footer/Header";
import Footer from "./Header and Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>
            Paisley <span className="highlight">Puppet </span>Adventures
          </h1>
          <Header />
        </div>

        <main></main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
