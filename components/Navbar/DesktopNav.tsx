import React, { ReactElement } from "react";
import { Notification, ChevronDown, Search } from "react-iconly";
import Image from "next/image";
import Link from "next/link";

export default function DesktopNav(): ReactElement {
  return (
    <>
      <div className="hidden lg:grid grid-cols-12 pl-6 md:px-6 py-7 max-w-screen-2xl items-center">
        <div className="col-span-2 text-white text-xl flex ">
          <Link href="/">skateboard</Link>
        </div>
        <div className="col-start-3 col-span-10 text-white grid grid-cols-6">
          <div className="col-span-4 bg-white rounded-lg bg-opacity-10 flex items-center py-3 px-3 ">
            <input
              type="search"
              placeholder="Search"
              className=" rounded-sm border-none border bg-transparent  w-full text-xs"
            />
            <Search size={"small"} />
          </div>

          <div className="col-span-1 col-start-6 flex items-center gap-4">
            <div className="w-8 h-8 rounded-full">
              <Image
                src="/image/profile/profile1.png"
                height={32}
                width={32}
                layout="responsive"
                objectFit="cover"
                alt="profile"
              />
            </div>

            <div className="flex">
              <p className="mr-1">Thomas</p>
              <ChevronDown primaryColor="#808191" />
            </div>
            <div className="relative">
              <div className="w-3 h-3 absolute right-0  rounded-full block bg-[#EC5252] border-2 border-[#1F1D2B]"></div>
              <Notification set="bold" primaryColor="#808191" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
