import { FileExplorerSectionType } from "../models/FileExplorerMenuModel";
import { FileId } from "../models/FileModel";

export const FILE_EXPLORER_SECTIONS: FileExplorerSectionType[] = [
  {
    name: "personal-info",
    folders: [
      {
        name: "bio",
        color: "#E99287",
        files: [],
      },
      {
        name: "interests",
        color: "#43D9AD",
        files: [
          {
            id: FileId.PERSONAL_INFO,
            name: "high-school",
            icon: "ri-markdown-fill",
          },
          {
            id: FileId.CONTACTS,
            name: "test",
            icon: "ri-markdown-fill",
          },
        ],
      },
      {
        name: "education",
        color: "#3A49A4",
        files: [],
      },
    ],
  },
  {
    name: "contacts",
    links: [
      {
        name: "nicolo.nf.fontana",
        url: "mailto:nicolo.nf.fontana@gmail.com",
        icon: "ri-mail-fill",
      },
      {
        name: "+393392917716",
        url: "tel:+393392917716",
        icon: "ri-phone-fill",
      },
    ],
  },
];
