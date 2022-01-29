import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Story from "components/Story/Story";
import Person from "data/Person"
          

export default function Stories(): ReactElement {
  return (
    <div className="pl-6 z-0 lg:hidden">
      <Swiper
        spaceBetween={12}
        slidesPerView={4.9}
      >
        {Person.map((person,i)=>(
        <SwiperSlide key={i+"stories"}>
          <Story img={person.img}  watched={person.story.watched} verified={person.verified}/>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}
