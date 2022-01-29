import React from "react";

import Image from "next/image";
type Props = {
  name: string;
  profileImg: string;
  text: string;
};

export default function CommentCard({ name, profileImg, text }: Props) {
  return (
    <div className="flex gap-2">
      <div
        id="comment-face"
        className="relative h-12 flex-shrink-0 basis-12 overflow-hidden rounded-full bg-gray-400"
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
        className="rounded-r-xl rounded-bl-xl bg-[#252836] p-4"
      >
        <h2 className="text-sm text-white">
          {name}
          <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[#22B07D] "></span>
        </h2>
        <p className="mt-2 text-xs leading-5 text-[#808191]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, harum?
        </p>
      </div>
    </div>
  );
}
