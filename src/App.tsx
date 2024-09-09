import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";

type Folder = {
  name: string;
  folders?: Folder[];
};
let folders: Folder[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          {
            name: "Action",
            folders: [
              {
                name: "2000s",
                folders: [
                  {
                    name: "Populer",
                    folders: [{ name: "Gladiator.mp4" }, { name: "American-Beauty.mp4" }],
                  },
                ],
              },
              { name: "2010s", folders: [] },
            ],
          },
          { name: "Comedy", folders: [{ name: "2000s", folders: [] }] },
        ],
      },
      {
        name: "Music",
        folders: [
          { name: "Rock", folders: [] },
          { name: "Classical", folders: [] },
        ],
      },
      { name: "Pictures", folders: [] },
      { name: "Documents", folders: [] },
      { name: "Picture.txt" },
    ],
  },
];
function App() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        {folders.map((folder) => (
          <Folder folder={folder} key={folder?.name} />
        ))}
      </ul>
    </div>
  );
}

const Folder = ({ folder }: { folder: Folder }) => {
  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        {folder.folders ? (
          <FolderIcon className="size-6 text-sky-500" />
        ) : (
          <DocumentIcon className="size-6 text-gay-900" />
        )}
        {folder.name}
      </span>
      <ul className="pl-6">
        {folder.folders?.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </li>
  );
};

export default App;
