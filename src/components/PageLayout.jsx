import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

function PageLayout() {
  return (
    <nav className="nav">
      <div className="logo">
        {/* <img src="/icon.png" alt="icon" height="70px" /> */}
      </div>
      <div className="navitems">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/about">About</NavLink>
        {/* <NavLink to="/contactus">Contact Us</NavLink> */}
      </div>
      <div className="darkmode">
        <DarkMode />
      </div>
    </nav>
  );
}

export default PageLayout;
