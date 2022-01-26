import React,{useState} from "react";
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
    <div className="pb-6 px-6 mt-6 text-white">
      <div className="flex items-start justify-between">
        <h1 className="text-xl lg:text-2xl w-72 lg:w-full">
          How to ride your skateboard and Basic Equipment
        </h1>
        <button
          className={clsx(
            "w-max flex justify-center items-center bg-white bg-opacity-10 rounded-full p-1 transition-all transform ",
            showDesc && ["rotate-180"]
          )}
          onClick={() => setshowDesc(!showDesc)}
        >
          <ChevronDown primaryColor="white" size={"small"} />
        </button>
      </div>

      <div className="mt-4 flex gap-6">
        <div id="views" className="flex gap-1 items-center">
          <Show primaryColor="#808191" size={"small"} />

          <p className="text-[#808191] text-xs">125.908 views</p>
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
            className="text-xs font-extralight leading-4 tracking-wide mt-2"
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
