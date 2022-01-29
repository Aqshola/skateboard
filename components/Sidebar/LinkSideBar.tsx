import React, { ReactElement } from "react";
import clsx from "clsx";
import { IconProps } from "react-iconly";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  label: string;
  active?: boolean;
  Logo?: React.FC<IconProps>;
  eventClick?:()=>void
}

export default function LinkSideBar({
  label,
  active,
  Logo,
  eventClick=()=>{}
}: Props): ReactElement {
  return (
    <button
    onClick={eventClick}
      className={clsx(
        " flex items-center",
        active && ["text-white"],
        !active && ["text-[#808191]"]
      )}
    >
      {Logo && (
        <div
          className={clsx(
            "p-2 rounded-xl relative",
            active && [" text-white"],
            !active && ["text-[#808191] bg-white bg-opacity-10"]
          )}
        >
          <Logo
            set="bold"
            style={{
              color: "inherit",
              zIndex: 100,
              position: "relative",
            }}
            size="small"
          />
          <AnimatePresence>
            {active && (
              <motion.div layoutId="selected" className=" rounded-xl bg-[#FF7551] z-0 w-full h-full absolute top-0 bottom-0 left-0 right-0 block"></motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <p className="font-medium tracking-wider  text-xs ml-4">{label}</p>
    </button>
  );
}
