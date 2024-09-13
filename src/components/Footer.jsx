import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="https://x.com/NaLeilan" target="_blank">
        <FaTwitter className="twitter" />
      </a>
      <a href="https://github.com/NaLeilan" target="_blank">
        <FaGithub className="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/leilan-na-77688931b/"
        target="_blank"
      >
        <FaLinkedinIn className="linkedin" />
      </a>

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
  );
}

export default Footer;
