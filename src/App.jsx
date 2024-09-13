import { MdDarkMode } from "react-icons/md";
import { FaGithub, FaL, FaLinkedinIn, FaN, FaTwitter } from "react-icons/fa6";

function App() {
  const currentYear = new Date().getFullYear();

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
      <div className="main">
        <h2>Full-time Freelancer</h2>
        <p>
          Full-time Freelancer is a short, self-published book that offers a
          concise view of the finances involved in freelancing full-time. It
          contains real financial numbers from my freelancing experience in 2010
          and 2011. I wrote it for those who are planning to go out on their own
          at some point and would like to see a real-world scenario of what that
          looks like. It’s the book I wish I had been able to read before I
          dived in to freelancing full-time.
        </p>
      </div>
      <footer className="footer">
        <FaTwitter className="twitter" />
        <FaGithub className="github" />
        <FaLinkedinIn className="linkedin" />
        <p className="copyright">
          Copyright &copy;
          <a
            className="Github-link"
            target="_blank"
            href="https://github.com/NaLeilan"
          >
            Leilan Na {currentYear}
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
