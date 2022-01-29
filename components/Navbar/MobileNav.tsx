import React, { ReactElement, useState } from "react";
import { Search } from "react-iconly";

interface Props {}

export default function MobileNav({}: Props): ReactElement {
  const [search, setsearch] = useState<boolean>(false);
  return (
    <div className="px-6 py-7 flex lg:hidden gap-1">
      <h1 className="flex-grow">
        <a href="#" className="text-white font-medium text-xl w-max">
          Discover
        </a>
      </h1>

      <div className="flex items-center gap-1">
        <input
          type="text"
          placeholder="search"
          className={
            "bg-transparent placeholder:text-xs text-xs transition-all text-white " +
            (search ? " w-full " : "w-0 overflow-hidden invisible")
          }
        />
        <button
          className="ml-auto"
          onClick={() => {
            setsearch(!search);
          }}
        >
          <Search size={"small"} primaryColor="#808191" />
        </button>
      </div>
    </div>
  );
}
