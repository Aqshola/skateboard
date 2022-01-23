import React, { ReactElement } from "react";
import { ArrowLeft, Heart } from "react-iconly";
import Image from "next/image";
import {useRouter} from "next/router"

interface Props {}

export default function NavVideo({}: Props): ReactElement {
  const route=useRouter();
  return (
    <div className="px-6 py-7 flex lg:hidden items-center">
      <button aria-label="back" className="mr-6" onClick={()=>route.back()}>
        <ArrowLeft primaryColor="#808191" />
      </button>
      <div className="flex-grow flex items-center">
        <Image
          src="/image/person/image 2.png"
          width={48}
          height={48}
          layout="fixed"
          alt="profile"
          objectFit="cover"
          className="rounded-full"
        />
        <div className="ml-2">
          <h1 className="text-sm text-white font-medium tracking-[0.3px]">
            Andy William
          </h1>
          <p className="text-xs  text-[#808191]">1,980,893 subscribers</p>
        </div>
      </div>
      <button
        className="w-7 h-7 rounded-full p-1
        flex justify-center items-center
      bg-[#EA5F5F]"
      >
        <Heart filled primaryColor="white" size="small" set="bold" />
      </button>
    </div>
  );
}
