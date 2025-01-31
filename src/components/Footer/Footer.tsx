import "./Footer.scss";
import LinkedinIcon from "../../assets/linkedin-fill.svg";
import GithubIcon from "../../assets/github-fill.svg";

interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__tab footer__tab--left">
          <p>find me in: </p>
        </div>
        <div className="footer__tab footer__tab--left">
          <a
            href="https://www.linkedin.com/in/nicolo-nf-fontana/"
            target="_black"
          >
            <img src={LinkedinIcon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__tab footer__tab--right">
          <a href="https://github.com/nicolo-fontana" target="_black">
            <p>@nicolo-fontana</p>
            <img src={GithubIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
