import FileExplorer from "../../components/FileExplorer/FileExplorer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FILE_EXPLORER_SECTIONS } from "../../constants/FileExplorerFolders";
import "./AboutMePage.scss";

interface AboutMePageInterface {}
const AboutMePage: React.FC<AboutMePageInterface> = () => {
  return (
    <div className="about-me d-flex">
      <Sidebar />
      <FileExplorer
        sections={FILE_EXPLORER_SECTIONS}
        onFileClick={(fileId) => console.log(fileId)}
      />
    </div>
  );
};
export default AboutMePage;
