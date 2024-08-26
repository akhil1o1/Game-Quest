import { Star } from "lucide-react";

export function Rating({ rating }: { rating: number }) {
   const stars = Array.from({ length: 5 }, (_, i) => i + 1);

   return (
      <div className="flex py-1 gap-2">
         {stars.map((star) => {
            const starColor =
               star <= rating
                  ? "#E58E27"
                  : star <= Math.ceil(rating) && rating % 1
                  ? "#E58E27"
                  : "grey";
            return <Star key={star} className="w-4 h-4" color={starColor} />;
         })}
      </div>
   );
}