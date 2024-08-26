import { aoboshiOne, pressStart, prostoOne } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Product } from "@/app/types";
import { Button } from "../ui/button";
import AvailableOn from "../shared/available-on";
import { Rating } from "../shared/rating";
import Blip from "../shared/blip";

interface BannerProps {
   product: Product;
}

export default function Banner({ product }: BannerProps) {
   return (
      <section className="py-8 relative z-20">
         <div className="bg-[#281E1F4D] md:w-[70%] p-2 mx-auto">
            <div
               className="w-full mx-auto relative bottom-6 pt-12"
               style={{
                  backgroundImage: "url('/rectangle.svg')",
                  backgroundSize: "cover",
                  // backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
               }}
            >
               <div className="md:w-[50%]">
                  <p className="bg-[#1E1E1E] text-left text-white/80 text-xs p-1 uppercase">
                     {product.shippingInformation}
                  </p>
                  <Rating rating={product.rating} />
               </div>
               <h1
                  className={cn(
                     "text-[#FFE3C1]  text-4xl md:text-5xl lg:text-7xl text-center my-16",
                     pressStart.className
                  )}
               >
                  {product.title}
               </h1>

               <div className="flex flex-col items-center gap-2">
                  <Button
                     className="rounded-full"
                     size={"lg"}
                     variant={"custom"}
                  >
                     Try For Free
                  </Button>
                  <Blip text="245k players already enrolled" />
               </div>
               <div className="flex justify-end pr-6">
                  <AvailableOn />
               </div>
            </div>
         </div>

         <div className="md:w-[70%] p-4 mx-auto my-10 space-y-8">
            <p className={cn("text-lg text-white/80", prostoOne.className)}>
               {product.description}
            </p>
            <div className="space-y-8">
               <h2
                  className={cn(
                     "text-[#DAB785] uppercase",
                     aoboshiOne.className
                  )}
               >
                  <span className="block text-2xl">Choos Your</span>
                  <span className="block text-4xl md:text-5xl lg:text-7xl">Champion</span>
               </h2>
               <p className={cn("text-lg text-white/80", prostoOne.className)}>
                  Whether you like to dive straight into the fray, support your
                  teammates, or something in between, there's a spot for you on
                  the Rift.
               </p>
            </div>
         </div>
      </section>
   );
}
