import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

interface SortGamesProps {
   onSortChange: (option: string) => void;
}

export default function SortGames({ onSortChange }: SortGamesProps) {
   return (
      
         <Select onValueChange={onSortChange}>
            <SelectTrigger className="w-max rounded-full bg-inherit border text-white/80">
               <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent className="bg-[#2B2417]">
               <SelectGroup className="text-white/80">
                  <SelectItem value="lowToHigh" className="hover:bg-[#E58E27]">
                     Price: Low to High
                  </SelectItem>
                  <SelectItem value="highToLow">Price: High to Low</SelectItem>
               </SelectGroup>
            </SelectContent>
         </Select>
   
   );
}
