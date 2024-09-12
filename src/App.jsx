import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <nav className="nav">
        <About />
        <Projects />
        <Skills />
        <ContactUs />
      </nav>
      <div className="app">app</div>
    </>
  );
}

export default App;
