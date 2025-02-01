import "./Header.scss";

interface HeaderProps {
  openedTabs: string[];
  selectedTab: string;
  onClick: (clickedTab: string) => void;
}
const Header: React.FC<HeaderProps> = ({
  openedTabs,
  selectedTab,
  onClick,
}) => {
  return (
    <header className="header d-flex header__border--bottom">
      <label className="header__name ps-4 d-flex align-items-center theme-text-body-small clr-secondary-100 header__border--right cursor-default">
        nicolò-fontana
      </label>
      {openedTabs.map((tabName, index) => (
        <a
          key={index}
          className={`px-5 h-100 header__tab header__border--right text-decoration-none theme-text-body-small clr-secondary-100 d-flex align-items-center text-center position-relative cursor-default ${
            selectedTab === tabName ? "header__tab--selected" : ""
          }`}
          onClick={() => onClick(tabName)}
        >
          {tabName}
        </a>
      ))}
    </header>
  );
};
export default Header;
