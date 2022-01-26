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
    <div className="px-6 py-7 flex lg:hidden items-center">
      <button aria-label="back" className="mr-6" onClick={() => route.back()}>
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

      <div className="relative  w-7 h-7 flex items-center justify-center">
        <div className="relative flex justify-center items-center">
          <AnimatePresence>
            {like && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="rounded-full w-7 h-7 p-1 bg-[#EA5F5F] absolute z-0"
              ></motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setlike(!like)}
            className={
              clsx(
                `rounded-full 
                  z-10 relative
                  flex justify-center items-center
                  transition-all transform 
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
