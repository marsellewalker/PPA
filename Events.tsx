import Header2 from "../header/header";
import Footer from "../footer/footer";

const Events = () => {
  return (
    <>
              <Header2/>

      <div className="container">
        <div>
          <h1>
            Paisley
            <span className="highlight">Puppet</span>
            Adventures
          </h1>
          </div>

          <main>
            <div className="background_container2">
              <h1 className="cool">Events</h1>

              <h4>Up and coming</h4>
              <h4>Past Events</h4>
            </div>
          </main>
        
        
        <Footer/>
      </div>
    </>
  );
};
export default Events;
