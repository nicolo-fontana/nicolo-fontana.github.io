import { useState } from "react";
import Editor from "../../components/Editor/Editor";
import FileExplorer from "../../components/FileExplorer/FileExplorer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FILE_EXPLORER_SECTIONS } from "../../constants/FileExplorerFolders";
import "./AboutMePage.scss";
import { FileExplorerFileType } from "../../models/FileExplorerMenuModel";

interface AboutMePageInterface {}
const AboutMePage: React.FC<AboutMePageInterface> = () => {
  const [openedFiles, setOpenedFiles] = useState<FileExplorerFileType[]>([]);

  const openfile = (fileToOpen: FileExplorerFileType) => {
    if (openedFiles.findIndex((file) => file.id === fileToOpen.id) === -1)
      setOpenedFiles([...openedFiles, fileToOpen]);
  };

  const closeFile = (fileToClose: FileExplorerFileType) => {
    if (openedFiles.length <= 1) return;
    setOpenedFiles(openedFiles.filter((file) => file.id != fileToClose.id));
  };

  return (
    <div className="about-me d-flex">
      <Sidebar />
      <FileExplorer sections={FILE_EXPLORER_SECTIONS} onFileClick={openfile} />
      <div className="flex-grow-1">
        <Editor openedFiles={openedFiles} onCloseFileClick={closeFile} />
      </div>
    </div>
  );
};
export default AboutMePage;
