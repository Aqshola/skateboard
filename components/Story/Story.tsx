import React, { ReactElement } from "react";
import Image from "next/image";
import clsx from "clsx";
import useBlurData from "utils/useBlurData";

interface Props {
  img: string;
  watched: boolean;
  verified: boolean;
}

export default function Story({
  img,
  watched = false,
  verified,
}: Props): ReactElement {
  let blurData=useBlurData(64,64)
  return (
    <div>
      <div
        className={clsx(
          "w-16 h-16 block relative p-0.5 rounded-full",
          watched && [
            "bg-clip-border bg-gradient-to-br from-[#1C85A6] to-[#6C5ECF]  ",
          ]
        )}
      >
        <div className="w-full h-full p-1 bg-[#1F1D2B] rounded-full">
          <Image
            src={img}
            layout="responsive"
            width={64}
            height={64}
            alt="story"
            className="rounded-full overflow-hidden"
            objectFit="cover"
            objectPosition={"center"}
            placeholder="blur"
            blurDataURL={blurData}
          />
        </div>

        {watched && verified && (
          <div className="left-12 h-max top-10 rounded-full absolute  p-1 box-border border-4 border-[#1F1D2B] bg-[#08A0F7]">
            <svg
              width="6"
              height="5"
              viewBox="0 0 6 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current text-white w-2 h-2"
            >
              <path
                d="M1 2.82843L2.41422 4.24264L5.24264 1.41421"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
