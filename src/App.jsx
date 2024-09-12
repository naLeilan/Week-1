import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <About />
        <Projects />
        <Skills />
        <ContactUs />
      </nav>
      <div className="main">app</div>
    </div>
  );
}

export default App;
