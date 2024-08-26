import { Product } from "@/app/types";
import GameCard from "../shared/game-card";

interface GamesListProps {
   products: Product[];
}

export default function GamesList({ products }: GamesListProps) {
   return (
      <section>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
               <GameCard product={product} />
            ))}
         </div>
      </section>
   );
}
