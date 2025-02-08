import FileExplorer from "../../components/FileExplorer/FileExplorer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AboutMePage.scss";

interface AboutMePageInterface {}
const AboutMePage: React.FC<AboutMePageInterface> = () => {
  return (
    <div className="about-me d-flex">
      <Sidebar />
      <FileExplorer />
    </div>
  );
};
export default AboutMePage;
