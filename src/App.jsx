import { MdDarkMode } from "react-icons/md";
import About from "./pages/About";
import { FaL, FaN } from "react-icons/fa6";
import Footer from "./components/Footer";

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
          <a>Contact Us</a>
        </div>
        <div className="darkmode">
          <MdDarkMode />
        </div>
      </nav>
      <About />
      <Footer />
    </div>
  );
}

export default App;
