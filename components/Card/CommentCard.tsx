import React from 'react';

import Image from "next/image";
type Props = {
  name:string,
  profileImg:string
  text:string
};



export default function CommentCard({name, profileImg, text}: Props) {
  return(
    <div className="flex gap-2">
    <div
      id="comment-face"
      className="basis-12 relative flex-shrink-0 h-12 rounded-full bg-gray-400 overflow-hidden"
    >
      <Image
        src={profileImg}
        layout="fill"
        objectFit="cover"
        alt="comment profile"
        objectPosition={"center"}
      />
    </div>
    <div
      id="comment-detail"
      className="p-4 rounded-bl-xl rounded-r-xl bg-[#252836]"
    >
      <h2 className="text-sm text-white">
        {name}
        <span className="bg-[#22B07D] inline-block w-2 ml-1 h-2 rounded-full "></span>
      </h2>
      <p className="text-xs text-[#808191] mt-2 leading-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
        harum?
      </p>
    </div>
  </div>
  );
}
