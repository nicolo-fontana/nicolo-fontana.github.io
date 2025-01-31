import "./MainContainer.scss";

interface MainContainerInterface {
  children?: React.ReactNode;
}

const MainContainer: React.FC<MainContainerInterface> = ({ children }) => {
  return <main className="main-container">{children}</main>;
};
export default MainContainer;
