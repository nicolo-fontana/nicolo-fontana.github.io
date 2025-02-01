import "./HelloPage.scss";
import BackgroundBlurs from "../../assets/Background Blurs.svg";

interface HelloPageInterface {}

const HelloPage: React.FC<HelloPageInterface> = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <label className="clr-secondary-400 text-body">Hi all. I am</label>
        <p className="clr-secondary-400 font-size-title text-title">
          Nicolò Fontana
        </p>
        <p className="clr-secondary-300 font-size-subtitle text-subtitle">
          &gt; Front-end developer
        </p>
      </div>
      <div className="w-50">
        <img
          className="hello-page__background-blurs"
          src={BackgroundBlurs}
          alt=""
        />
      </div>
    </div>
  );
};
export default HelloPage;
