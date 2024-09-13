import { MdDarkMode } from "react-icons/md";
import { FaGithub, FaL, FaLinkedinIn, FaN, FaTwitter } from "react-icons/fa6";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="logo">
          <FaL />
          <FaN />
        </div>
        <div className="navitems">
          <a>About</a>
          <a>Projects</a>
          <a>Skills</a>
          <a>ContactUs</a>
        </div>
        <div className="darkmode">
          <MdDarkMode />
        </div>
      </nav>
      <div className="main">app</div>
      <footer className="footer">
        <FaTwitter className="twitter" />
        <FaGithub className="github" />
        <FaLinkedinIn className="linkedin" />
        <p className="footer-p">copyright</p>
      </footer>
    </div>
  );
}

export default App;
