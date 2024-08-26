import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

import { Product } from "@/app/types";

import { Separator } from "@/components/ui/separator";
import Banner from "@/components/game-details-page/banner";

export default async function GameDetailsPage({
   params,
}: {
   params: { gameId: string };
}) {
   const {userId} = auth();

   if(!userId) {
      redirect("/sign-in");
   }

   const response = await axios.get(
      `https://dummyjson.com/products/${params.gameId}`
   );
   const product = response.data as Product;

   return (
      <main className="bg-[#3D352A] pt-28 relative">
         <div
            className="w-full h-[70vh] absolute bg-inherit z-10 top-0"
            style={{
               boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
         />
         <Separator
            orientation="vertical"
            className="h-full absolute top-0 left-28 z-[1]"
         />
         <Banner product={product} />
      </main>
   );
}
