import Details from "./details";
import { Rating } from "./rating";
import Blip from "./blip";

export default function FeaturedGame({ title }: { title: string }) {
   return (
      <>
         <div className="w-full h-14 bg-[#1E1D16]" />
         <div className="flex justify-end p-4">
            <div>
               <Blip text="40 of your friends are playing" />
               <Rating rating={4} />
            </div>
         </div>
         <section className="p-8 md:pl-40  text-white/80 bg-[#0000004D]">
            <div className="md:w-[60%]">
               <Details title={title} />
            </div>
         </section>
         <div className="w-full h-14 bg-[#1E1D16]" />
      </>
   );
}
