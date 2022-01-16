import React, { ReactElement } from "react";
import Image from "next/image";

interface Props {
  img: string;
}

export default function Story({ img }: Props): ReactElement {
  return (
    <div>
      <div className="w-16 h-16 block relative p-0.5 bg-clip-border bg-gradient-to-br from-[#1C85A6] to-[#6C5ECF]  rounded-full">
        <div className="w-full h-full p-1 bg-[#1F1D2B] rounded-full">
          <Image
            src={img}
            layout="responsive"
            width={64}
            height={64}
            alt="story"
          />
        </div>
      </div>
    </div>
  );
}
