import React, { ReactElement } from "react";
import { Search } from "react-iconly";

interface Props {}

export default function MobileNav({}: Props): ReactElement {
  return (
    <div className="px-6 py-7 flex lg:hidden">
      <h1 className="flex-grow">
        <a href="#" className="text-white font-medium text-xl w-max">
          Discover
        </a>
      </h1>
      <button>
        <Search size={"small"} primaryColor="#808191" />
      </button>
    </div>
  );
}
