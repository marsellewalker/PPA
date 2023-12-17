import { Link } from "react-router-dom";
const Header = () => {
  return <>
   <div className="Header">
          <Link to="/">Home</Link>
          <Link to="/Who We Are">WhoWeAre</Link>
          <Link to="/Events">Events</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <hr/>

  
  </>;
};
export default Header;
