import { useState } from "react";
import {
  FileExplorerFileType,
  FileExplorerFolderType,
  FileExplorerSectionType,
} from "../../models/FileExplorerMenuModel";
import "./FileExplorer.scss";

interface FileExplorerFolderInterface {
  folder: FileExplorerFolderType;
  onFileClick: (FileExplorerFileId: FileExplorerFileType) => void;
}
const FileExplorerFolder: React.FC<FileExplorerFolderInterface> = ({
  folder,
  onFileClick,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="file-explorer__folder w-100">
      <a
        className="file-explorer__folder__header d-flex text-decoration-none align-items-center"
        onClick={() => setIsOpened(!isOpened)}
      >
        <i
          className={`ri-arrow-right-s-line file-explorer__section__header__icon ${
            isOpened ? "file-explorer__section__header__icon--opened" : ""
          } clr-secondary-100`}
        ></i>
        <i className="ri-folder-3-fill" style={{ color: folder.color }}></i>
        <p className="theme-text-body-small m-0 ms-2 clr-secondary-100 user-select-none">
          {folder.name}
        </p>
      </a>
      <div
        className={`file-explorer__folder__body ${
          isOpened ? "file-explorer__folder__body--opened" : ""
        }`}
      >
        {folder.files?.map((file, id) => (
          <a
            className="file-explorer__folder__body__file d-flex text-decoration-none align-items-center"
            onClick={() => onFileClick(file)}
            key={id}
          >
            <i className={`${file.icon} clr-file-explorer-icon`}></i>
            <p className="theme-text-body-small m-0 ms-2 clr-secondary-100 user-select-none">
              {file.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

interface FileExporerSectionInterface {
  section: FileExplorerSectionType;
  onFileClick: (FileExplorerFileId: FileExplorerFileType) => void;
}
const FileExportrSection: React.FC<FileExporerSectionInterface> = ({
  section,
  onFileClick,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  return (
    <div className="file-explorer__section w-100">
      <a
        className={`file-explorer__section__header d-flex text-decoration-none align-items-center`}
        onClick={() => setIsOpened(!isOpened)}
      >
        <i
          className={`ri-arrow-right-s-fill file-explorer__section__header__icon ${
            isOpened ? "file-explorer__section__header__icon--opened" : ""
          } clr-white`}
        ></i>
        <p className="theme-text-body-small m-0 clr-white user-select-none">
          {section.name}
        </p>
      </a>
      <div
        className={`file-explorer__section__body ${
          isOpened ? "file-explorer__section__body--opened pt-4 pb-5" : ""
        }`}
      >
        {section.folders
          ?.filter((folder) => !!folder.files.length)
          ?.map((folder, id) => (
            <FileExplorerFolder
              folder={folder}
              onFileClick={onFileClick}
              key={id}
            />
          ))}
        {section.links?.map((link, id) => (
          <a
            className="file-explorer__folder__header d-flex text-decoration-none align-items-center w-100"
            href={link.url}
            key={id}
          >
            <i className={`${link.icon} clr-secondary-100`}></i>
            <span className="theme-text-body-small m-0 ms-2 clr-secondary-100">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

interface FileExplorerInterface {
  sections: FileExplorerSectionType[];
  onFileClick: (FileExplorerFileId: FileExplorerFileType) => void;
}
const FileExplorer: React.FC<FileExplorerInterface> = ({
  sections,
  onFileClick,
}) => {
  return (
    <div className="file-explorer">
      {sections.map((section, id) => (
        <FileExportrSection
          section={section}
          onFileClick={onFileClick}
          key={id}
        />
      ))}
    </div>
  );
};
export default FileExplorer;
