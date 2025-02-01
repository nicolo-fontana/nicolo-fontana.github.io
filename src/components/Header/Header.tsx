import "./Header.scss";
import HamburgerMenuIcon from "../../assets/hamburger_menu.svg";
import HamburgerMenuCloseIcon from "../../assets/hamburger_menu_close.svg";
import { useState } from "react";
import Footer from "../Footer/Footer";
import { TabMenu } from "../../models/TabMenuModel";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  tabs: TabMenu[];
}
const Header: React.FC<HeaderProps> = ({ tabs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState<boolean>(false);

  return (
    <header className="header header__border--bottom position-relative">
      {/* DESKTOP */}
      <div className="d-none d-xl-flex h-100">
        <label className="header__name ps-4 d-flex align-items-center theme-text-body-small clr-secondary-100 header__border--right cursor-default">
          nicolò-fontana
        </label>
        {tabs.map((tab, index) => (
          <a
            key={index}
            className={`px-5 h-100 header__tab header__border--right text-decoration-none theme-text-body-small clr-secondary-100 d-flex align-items-center text-center position-relative cursor-default ${
              location.pathname.includes(tab.path)
                ? "header__tab--selected"
                : ""
            }`}
            onClick={() => navigate(tab.path)}
          >
            {tab.name}
          </a>
        ))}
      </div>

      {/* MOBILE */}
      <div className="d-xl-none d-flex justify-content-between align-items-center w-100 h-100">
        <label className="header__name d-flex align-items-center theme-text-body-small clr-secondary-100 cursor-default ps-4">
          nicolò-fontana
        </label>
        <a
          className="h-100 d-flex align-items-center px-4"
          onClick={() => setMobileMenuIsOpened(!mobileMenuIsOpened)}
        >
          {mobileMenuIsOpened ? (
            <img src={HamburgerMenuCloseIcon} alt="hamburger menu" />
          ) : (
            <img src={HamburgerMenuIcon} alt="hamburger menu" />
          )}
        </a>
      </div>
      <div
        className={`header__mobile-menu d-xl-none d-flex flex-column justify-content-between position-absolute left-0 w-100 bg-primary-200 ${
          mobileMenuIsOpened ? "header__mobile-menu--show" : ""
        }`}
      >
        <ul className="p-0">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`p-4 w-100 header__tab text-decoration-none theme-text-body-small clr-secondary-100 position-relative cursor-default ${
                location.pathname.includes(tab.path)
                  ? "header__tab--selected"
                  : ""
              }`}
              onClick={() => navigate(tab.path)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
        <div className="d-block d-xl-none">
          <Footer />
        </div>
      </div>
    </header>
  );
};
export default Header;
