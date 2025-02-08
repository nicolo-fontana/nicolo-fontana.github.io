import "./Sidebar.scss";
import TerminalIcon from "../../assets/professional-info-icon.svg";
import FilesIcon from "../../assets/personal-info-icon.svg";
import GamesIcon from "../../assets/hobbies-icon.svg";

interface SidebarInterface {}

const Sidebar: React.FC<SidebarInterface> = () => {
  return (
    <div className="sidebar d-flex flex-column">
      <a className="sidebar__icon__link">
        <img className="sidebar__icon" src={TerminalIcon} alt="" />
      </a>
      <a className="sidebar__icon__link">
        <img className="sidebar__icon" src={FilesIcon} alt="" />
      </a>
      <a className="sidebar__icon__link">
        <img className="sidebar__icon" src={GamesIcon} alt="" />
      </a>
    </div>
  );
};

export default Sidebar;
