import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import {
  Show,
  ChevronDown,
  Send,
  Heart,
  MoreCircle,
  Play,
  VolumeUp,
  Filter,
  Category,
} from "react-iconly";

type Props = {};

export default function VideoDesc({}: Props) {
  const [showDesc, setshowDesc] = useState<boolean>(false);
  return (
    <div className="mt-6 px-6 pb-6 text-white">
      <div className="flex items-start justify-between">
        <h1 className="w-72 text-xl lg:w-full lg:text-2xl">
          How to ride your skateboard and Basic Equipment
        </h1>
        <button
          className={clsx(
            "flex w-max transform items-center justify-center rounded-full bg-white bg-opacity-10 p-1 transition-all ",
            showDesc && ["rotate-180"]
          )}
          onClick={() => setshowDesc(!showDesc)}
        >
          <ChevronDown primaryColor="white" size={"small"} />
        </button>
      </div>

      <div className="mt-4 flex gap-6">
        <div id="views" className="flex items-center gap-1">
          <Show primaryColor="#808191" size={"small"} />

          <p className="text-xs text-[#808191]">125.908 views</p>
        </div>
        <div id="likes" className="flex items-center gap-1">
          <Heart primaryColor="#808191" size={"small"} />
          <p className="text-xs text-[#808191]">47,987 likes</p>
        </div>
      </div>
      <AnimatePresence>
        {showDesc && (
          <motion.p
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "fit-content",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="mt-2 text-xs font-extralight leading-4 tracking-wide"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            soluta laboriosam nulla provident modi recusandae quod obcaecati
            iste unde officiis minus rerum fuga illum perferendis, dolorum,
            iusto ad quis quidem quisquam! Odio excepturi reprehenderit
            repellendus possimus, mollitia laboriosam consequatur laborum hic
            tenetur rem sint adipisci cumque ducimus. Sunt distinctio facilis
            laborum, saepe dicta recusandae officiis repellat beatae dignissimos
            cupiditate dolores, illum accusantium delectus, nesciunt neque
            voluptates. Sed quasi consequatur consectetur fugiat temporibus!
            Voluptas ullam temporibus ipsam, eveniet quos magni perferendis qui,
            veritatis natus nemo quidem, vel itaque aut quas commodi accusamus
            assumenda dicta? Accusantium quos enim eum asperiores placeat quasi!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
