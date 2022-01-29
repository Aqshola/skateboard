import React from "react";
import { Send, MoreCircle } from "react-iconly";

import CommentCard from "components/Card/CommentCard";
import PersonList from "data/Person";

type Props = {};

export default function CommentSection({}: Props) {
  return (
    <section>
      <div className="px-6 mt-6 gap-4 flex flex-col ">
        {PersonList.slice(0, 2).map((person, i) => (
          <CommentCard
            key={i + "comment"}
            profileImg={person.img}
            name={person.name}
            text={""}
          />
        ))}
      </div>

      <div className="fixed bottom-10 lg:bottom-5 px-6 mb-2 w-full max-w-screen-2xl">
        <div className="p-2 box-border mt-8  rounded-full bg-[#252836] flex items-center">
          <div id="icon-more">
            <MoreCircle filled primaryColor="#666872" />
          </div>
          <input
            type="text"
            placeholder="Write your message"
            className="text-xs text-white bg-transparent placeholder:text-xs placeholder:text-[#808191] basis-full min-w-0 ml-3"
          />
          <button className="p-2 rounded-full bg-[#6C5ECF] justify-center items-center">
            <Send size={"small"} filled primaryColor="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
