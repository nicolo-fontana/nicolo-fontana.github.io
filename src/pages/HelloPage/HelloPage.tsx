import "./HelloPage.scss";
import BackgroundBlurs from "../../assets/Background Blurs.svg";

interface HelloPageInterface {}

const HelloPage: React.FC<HelloPageInterface> = () => {
  // Welcome to my portfolio Easter egg
  const welcomeMessage = "Welcome to my portfolio";
  console.log(welcomeMessage);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <div className="pb-5">
          <p className="clr-secondary-400 theme-text-body m-0">Hi all. I am</p>
          <p className="clr-secondary-400 theme-text-title m-0 lh-1">
            Nicolò Fontana
          </p>
          <p className="clr-secondary-300 theme-text-subtitle m-0 lh-1">
            &gt; Front-end developer
          </p>
        </div>
        <div className="pt-5">
          <p className="clr-secondary-100 m-0 theme-text-body-small">
            // Say hello to the user
          </p>
          <p className="m-0 theme-text-body-small clr-white">
            <span className="clr-secondary-300">const</span>{" "}
            <span className="clr-gradient-end">welcomeMessage</span> ={" "}
            <span className="clr-accent-300">“Welcome to my portfolio”</span>;
          </p>
          <p className="m-0 theme-text-body-small clr-white">
            <span className="clr-secondary-100">console</span>.
            <span className="clr-accent-100">log</span>
            <span className="clr-accent-400">(</span>
            <span className="clr-gradient-end">welcomeMessage</span>
            <span className="clr-accent-400">)</span>;
          </p>
        </div>
      </div>
      <div>
        <img className="hello-page__bg-blurs" src={BackgroundBlurs} alt="" />
      </div>
    </div>
  );
};
export default HelloPage;
