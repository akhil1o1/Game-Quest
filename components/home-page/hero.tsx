"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Details from "../shared/details";
import Blip from "../shared/blip";

const TITLES = ["Days Gone", "Evolution", "Valorant"];

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
   return (
      <section className="p-8 md:pl-40  text-white/80">
         <Carousel showArrows={false} infiniteLoop={true} autoPlay={true}>
            {TITLES.map((title) => (
               <div key={title} className="md:w-[50%]">
                  <Details key={title} title={title} />
               </div>
            ))}
         </Carousel>
         <Blip text="40 of your friends are playing" />
      </section>
   );
}
