import "./Footer.scss";
import LinkedinIcon from "../../assets/linkedin-fill.svg";
import GithubIcon from "../../assets/github-fill.svg";

interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer className="footer footer__border--top w-100 d-flex justify-content-between">
      <div className="d-flex">
        <label className="theme-text-body-small clr-secondary-100 d-flex align-items-center footer__border--right px-4 cursor-default">
          find me in:
        </label>
        <a
          href="https://www.linkedin.com/in/nicolo-nf-fontana/"
          target="_black"
          className="d-flex align-items-center text-decoration-none footer__border--right h-100 px-4 cursor-default"
        >
          <img src={LinkedinIcon} alt="" className="footer__logo" />
        </a>
      </div>
      <a
        href="https://github.com/nicolo-fontana"
        target="_black"
        className="d-flex align-items-center text-decoration-none footer__border--left h-100 px-4 cursor-default"
      >
        <label className="theme-text-body-small clr-secondary-100 pe-2">
          @nicolo-fontana
        </label>
        <img src={GithubIcon} alt="" className="footer__logo" />
      </a>
    </footer>
  );
};
export default Footer;
