import { prostoOne, wallPoet } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import AvailableOn from "./available-on";

export default function Details({ title }: { title: string }) {
   return (
      <div className="space-y-12 text-left">
         <div className="w-[75%]">
            <h1 className={cn("text-5xl md:text-7xl", wallPoet.className)}>{title}</h1>
            <p className="bg-[#1E1E1E] text-right mt-2 text-xs p-1">
               RELEASE DATE : 30TH DECEMBER
            </p>
         </div>

         <p className={cn("text-lg", prostoOne.className)}>
            Players assume the role of Deacon St. John, a former bounty hunter
            struggling to survive in a post-apocalyptic world filled with
            zombie-like creatures called Freaks. Though players are surrounded
            by death and danger on all sides, the world that they get to explore
            feels as though it&apos;s truly alive, which can encourage players to
            take risks when they probably shouldn&apos;t.
         </p>

         <div className="space-y-3">
            <div className="flex items-center flex-wrap gap-4">
               <Button variant={"custom"} size={"lg"} className="rounded-full">
                  Try For Free
               </Button>
               <AvailableOn/>
            </div>
            <p className="text-start">Buy now for $40 only</p>
         </div>
      </div>
   );
}
