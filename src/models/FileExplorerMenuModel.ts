export type FileExplorerSectionType = {
  name: string;
  folders?: FileExplorerFolderType[];
  links?: FileExplorerLinkType[];
};

export type FileExplorerFolderType = {
  name: string;
  color: string;
  files: FileExplorerFileType[];
};

export type FileExplorerFileType = {
  id: FileExplorerFileId;
  icon: string;
  name: string;
};

export type FileExplorerLinkType = {
  icon: string;
  name: string;
  url: string;
};

export enum FileExplorerFileId {
  PERSONAL_INFO,
  CONTACTS,
}
