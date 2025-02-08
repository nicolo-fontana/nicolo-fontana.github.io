import "./Sidebar.scss";

interface SidebarInterface {}

const Sidebar: React.FC<SidebarInterface> = () => {
  return (
    <div className="sidebar d-flex flex-column">
      <a className="sidebar__icon__link">
        <i className="ri-terminal-box-fill sidebar__icon"></i>
      </a>
      <a className="sidebar__icon__link">
        <i className="ri-user-4-fill sidebar__icon sidebar__icon--selected"></i>
      </a>
      <a className="sidebar__icon__link">
        <i className="ri-gamepad-fill sidebar__icon"></i>
      </a>
    </div>
  );
};

export default Sidebar;
