import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FaL, FaN } from "react-icons/fa6";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="logo">
          <FaL />
          <FaN />
        </div>
        <About />
        <Projects />
        <Skills />
        <ContactUs />
      </nav>
      <div className="main">app</div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
