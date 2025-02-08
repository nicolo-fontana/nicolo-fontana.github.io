export type FileExplorerFolder = {
  name: string;
  files: FileExplorerFile[];
  folders: FileExplorerFolder[];
  links: FileExplorerLink[];
};

export type FileExplorerFile = {
  id: FileExplorerFileId;
  icon: FileExplorerIcon;
  name: string;
};

export type FileExplorerLink = {
  icon: FileExplorerIcon;
  name: string;
  url: string;
};

export enum FileExplorerIcon {
  MAIL,
  PHONE,
  MARKDOWN,
}

export enum FileExplorerFileId {
  PERSONAL_INFO,
  CONTACTS,
}
