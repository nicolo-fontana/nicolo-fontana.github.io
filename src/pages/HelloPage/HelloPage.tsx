import "./HelloPage.scss";
import BackgroundBlurs from "../../assets/Background Blurs.svg";
import { useEffect } from "react";

interface HelloPageInterface {}

const HelloPage: React.FC<HelloPageInterface> = () => {
  // Welcome to my portfolio Easter egg
  const welcomeMessage = "Welcome to my portfolio";
  useEffect(() => {
    setTimeout(() => {
      console.log(welcomeMessage);
    }, 4000);
  }, []);

  return (
    <div className="hello-page d-flex justify-content-center align-items-start align-items-sm-center position-relative">
      <img
        className="hello-page__bg-blurs position-absolute top-0"
        src={BackgroundBlurs}
        alt=""
      />
      <div className="w-auto mw-100 px-5 pt-5 pt-sm-0">
        <div className="pb-5 fade-in">
          <div className="clr-secondary-400 theme-text-body m-0">
            Hi all. I am
          </div>
          <div className="clr-secondary-400 theme-text-title m-0 lh-1">
            Nicolò Fontana
          </div>
          <div className="clr-secondary-300 theme-text-subtitle m-0 lh-1">
            &gt; Front-end developer
          </div>
        </div>
        <div className="pt-5 d-flex flex-column align-items-start">
          <div className="clr-secondary-100 theme-text-body-small typewriter">
            // Say hello to the user
          </div>
          <div className="m-0 theme-text-body-small clr-white typewriter typewriter-delay-1">
            <span className="clr-secondary-300">const</span>{" "}
            <span className="clr-gradient-end">welcomeMessage</span> ={" "}
            <span className="clr-accent-300 d-block d-sm-inline-block ps-5 ps-sm-0">
              “{welcomeMessage}”<span className="clr-white">;</span>
            </span>
          </div>
          <div className="m-0 theme-text-body-small clr-white typewriter typewriter-delay-2">
            <span className="clr-secondary-100">console</span>.
            <span className="clr-accent-100">log</span>
            <span className="clr-accent-400">(</span>
            <span className="clr-gradient-end">welcomeMessage</span>
            <span className="clr-accent-400">)</span>;
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelloPage;
