import { FileExplorerFileType } from "../../models/FileExplorerMenuModel";
import "./Editor.scss";

interface EditorHeaderInterface {
  openedFiles: FileExplorerFileType[];
  onCloseClick: (fileid: FileExplorerFileType) => void;
  onSelectClick: (fileid: FileExplorerFileType) => void;
}
const EditorHeader: React.FC<EditorHeaderInterface> = ({
  openedFiles,
  onCloseClick,
  onSelectClick,
}) => {
  return (
    <div className="editor__header d-flex">
      {openedFiles.map((openedFile, id) => (
        <div
          className="editor__header__file"
          key={id}
          onClick={() => onSelectClick(openedFile)}
        >
          <span className="theme-text-body-small m-0 clr-secondary-100 user-select-none">
            {openedFile.name}
          </span>
          <a className="ms-5" onClick={() => onCloseClick(openedFile)}>
            <i className="ri-close-large-line editor__header__file__icon clr-secondary-100"></i>
          </a>
        </div>
      ))}
    </div>
  );
};

interface EditorInterface {
  openedFiles: FileExplorerFileType[];
  onCloseFileClick: (fileid: FileExplorerFileType) => void;
}
const Editor: React.FC<EditorInterface> = ({
  openedFiles,
  onCloseFileClick,
}) => {
  return (
    <div className="editor">
      <EditorHeader
        openedFiles={openedFiles}
        onCloseClick={onCloseFileClick}
        onSelectClick={console.log}
      />
    </div>
  );
};
export default Editor;
