import { useState, useEffect } from "react";
import axios from "axios";

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

type Category = {
   slug: string;
   name: string;
   url: string;
};

interface FiltersProps {
   onCategoryChange: (category: string) => void;
   selectedCategories ?: string[];
}

export default function Filters({onCategoryChange,selectedCategories}: FiltersProps) {
   const [categories, setCategories] = useState<Category[]>([]);

   useEffect(() => {
      async function fetchCategories() {
         try {
            const response = await axios.get(
               "https://dummyjson.com/products/categories"
            );
            setCategories(response.data);
         } catch (error) {
            console.error("Error fetching categories:", error);
         }
      }

      fetchCategories();
   }, []);

   if (!categories.length) {
      return null;
   }

   return (
      <div className="flex flex-col p-6 shadow-lg rounded-md w-[90%] bg-[#3D352A80]">
         <div className="absolute inset-0 bg-[#3D352A80] backdrop-blur-sm z-[-1]"></div>
         <div className="font-[500] text-white/80 textl mb-4">Categories</div>
         <ul className="flex flex-col gap-6 text-white/80">
            {categories.map((category) => (
               <li key={category.slug}>
                  <div className="flex items-center space-x-2">
                     <Checkbox
                        id={category.slug}
                        className="bg-[#2B2417] border border-white/30"
                        onCheckedChange={() => onCategoryChange(category.slug)}
                        checked={selectedCategories?.includes(category.slug)}
                     />
                     <Label htmlFor={category.slug}>{category.name}</Label>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}
