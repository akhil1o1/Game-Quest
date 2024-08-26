import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

import Filters from "./filters";

interface FiltersPopoverProps {
   onCategoryChange: (category: string) => void;
   selectedCategories : string[];
}

export default function FiltersPopover({
   onCategoryChange, selectedCategories
}: FiltersPopoverProps) {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button variant={"custom"}><Filter className="w-4 h-4"/> Categories</Button>
         </PopoverTrigger>
         <PopoverContent className="w-80 bg-[#2B2417]" side={"bottom"}>
            <Filters onCategoryChange={onCategoryChange} selectedCategories={selectedCategories} />
         </PopoverContent>
      </Popover>
   );
}
