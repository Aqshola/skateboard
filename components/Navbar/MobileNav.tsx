import React, { ReactElement, useState } from "react";
import { Search } from "react-iconly";

interface Props {}

export default function MobileNav({}: Props): ReactElement {
  const [search, setsearch] = useState<boolean>(false);
  return (
    <div className="flex gap-1 px-6 py-7 lg:hidden">
      <h1 className="flex-grow">
        <a href="#" className="w-max text-xl font-medium text-white">
          Discover
        </a>
      </h1>

      <div className="flex items-center gap-1">
        <input
          type="text"
          placeholder="search"
          className={
            "bg-transparent text-xs text-white transition-all placeholder:text-xs " +
            (search ? " w-full " : "invisible w-0 overflow-hidden")
          }
        />
        <button
          aria-label="Search"
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
