import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (

        <button onClick={()=> setIsOpen(!isOpen)}>

        <ChevronRightIcon className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""} `}/>
        </button>
        )}
        {folder.folders ? (
          <FolderIcon className={`size-6 text-sky-500 ${folder.folders.length === 0 ? "ml-[22px]" : ""}`} />
        ) : (
          <DocumentIcon className=" ml-[22px] size-6 text-gay-900" />
        )}
        {folder.name}
      </span>
      {isOpen && (

      <ul className="pl-6">
        {folder.folders?.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
      )}
    </li>
  );
};

export default App;
