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
    <header className="header">
      <div className="header__tab header__tab__name">
        <p>nicolò-fontana</p>
      </div>
      {openedTabs.map((tabName) => (
        <div
          className={`header__tab ${
            selectedTab === tabName ? "header__tab--selected" : ""
          }`}
          onClick={() => onClick(tabName)}
        >
          <p>{tabName}</p>
        </div>
      ))}
    </header>
  );
};
export default Header;
