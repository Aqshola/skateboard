import React, { ReactElement } from "react";
import { Notification, ChevronDown, Search } from "react-iconly";
import Image from "next/image";
import Link from "next/link";

export default function DesktopNav(): ReactElement {
  return (
    <>
      <div className="hidden max-w-screen-2xl grid-cols-12 items-center py-7 pl-6 md:px-6 lg:grid">
        <div className="col-span-2 flex text-xl text-white ">
          <Link href="/">skateboard</Link>
        </div>
        <div className="col-span-10 col-start-3 grid grid-cols-6 text-white">
          <div className="col-span-4 flex items-center rounded-lg bg-white bg-opacity-10 py-3 px-3 ">
            <input
              type="search"
              placeholder="Search"
              className=" w-full rounded-sm border border-none  bg-transparent text-xs"
            />
            <Search size={"small"} />
          </div>

          <div className="col-span-1 col-start-6 flex items-center gap-4">
            <div className="h-8 w-8 rounded-full">
              <Image
                src="/image/person/image 2.png"
                height={32}
                width={32}
                layout="responsive"
                objectFit="cover"
                alt="profile"
                className="rounded-full"
              />
            </div>

            <div className="flex">
              <p className="mr-1">Thomas</p>
              <ChevronDown primaryColor="#808191" />
            </div>
            <div className="relative">
              <div className="absolute right-0 block h-3  w-3 rounded-full border-2 border-[#1F1D2B] bg-[#EC5252]"></div>
              <Notification set="bold" primaryColor="#808191" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
