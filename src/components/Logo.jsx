// import { FaL, FaN } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

function Logo() {
  return (
    <nav className="nav">
      <div className="logo">
        {/* <FaL />
        <FaN /> */}
        <img src="/icon.png" alt="icon" height="70px" />
      </div>
      <div className="navitems">
        <a>About</a>
        <a>Projects</a>
        <a>Skills</a>
        <a>Contact Us</a>
      </div>
      <div className="darkmode">
        <MdDarkMode />
      </div>
    </nav>
  );
}

export default Logo;
