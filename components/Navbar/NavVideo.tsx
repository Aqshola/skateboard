import React, { ReactElement, useState } from "react";
import { ArrowLeft, Heart } from "react-iconly";
import Image from "next/image";
import { useRouter } from "next/router";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import clsx from "clsx";

export default function NavVideo(): ReactElement {
  const route = useRouter();
  const [like, setlike] = useState<boolean>(false);
  return (
    <div className="flex items-center px-6 py-7 lg:hidden">
      <button aria-label="back" className="mr-6" onClick={() => route.back()}>
        <ArrowLeft primaryColor="#808191" />
      </button>
      <div className="flex flex-grow items-center">
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
          <h1 className="text-sm font-medium tracking-[0.3px] text-white">
            Andy William
          </h1>
          <p className="text-xs  text-[#808191]">1,980,893 subscribers</p>
        </div>
      </div>

      <div className="relative  flex h-7 w-7 items-center justify-center">
        <div className="relative flex items-center justify-center">
          <AnimatePresence>
            {like && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute z-0 h-7 w-7 rounded-full bg-[#EA5F5F] p-1"
              ></motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setlike(!like)}
            className={clsx(
              `relative 
                  z-10 flex
                  transform items-center justify-center
                  rounded-full transition-all 
                      `,
              !like && ["text-[#EA5F5F]"],
              like && ["text-white"]
            )}
          >
            <Heart
              filled
              style={{
                fill: "currentcolor",
              }}
              size="small"
              set="bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
