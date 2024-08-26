"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import { Product } from "../types";
import Filters from "@/components/games-page/filters";
import GamesList from "@/components/games-page/games-list";
import { LoadingWheel } from "@/components/shared/loading-wheel";
import SortGames from "@/components/games-page/sort-games";
import FeaturedGame from "@/components/shared/featured-game";
import FiltersPopover from "@/components/games-page/filters-popover";

export default function GamesPage() {
   const [products, setProducts] = useState<Product[]>([]);
   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
   const [sortOption, setSortOption] = useState<string>("");

   useEffect(() => {
      async function fetchProducts() {
         try {
            const response = await axios.get("https://dummyjson.com/products");
            const products = response.data.products;
            setProducts(products);
            setFilteredProducts(products); // Initialize filtered products
         } catch (error) {
            console.error("Error fetching products:", error);
         }
      }

      fetchProducts();
   }, []);

   console.log(products);

   useEffect(() => {
      let updatedProducts = [...products];
   
      // Filter by selected categories
      if (selectedCategories.length > 0) {
         updatedProducts = updatedProducts.filter((product) =>
            selectedCategories.includes(product.category)
         );
      }
   
      // Sort by price
      if (sortOption === "lowToHigh") {
         updatedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "highToLow") {
         updatedProducts.sort((a, b) => b.price - a.price);
      }
   
      setFilteredProducts(updatedProducts);
   }, [selectedCategories, sortOption, products]);
   

   function handleCategoryChange(category: string) {
      setSelectedCategories((prevSelected) =>
         prevSelected.includes(category)
            ? prevSelected.filter((cat) => cat !== category)
            : [...prevSelected, category]
      );
   }

   function handleSortChange(option: string) {
      setSortOption(option);
   }

   if (!products.length) {
      return (
         <div className="bg-black w-[100vw] h-[100vh] flex items-center justify-center">
            <LoadingWheel />
         </div>
      );
   }

   return (
      <div className="relative bg-[#2B2417] flex">
         <main className="flex-1 pt-28">
            <section className="p-4 lg:p-0 flex">
               <div className="hidden lg:flex px-4 justify-center w-72 h-full">
                  <Filters onCategoryChange={handleCategoryChange} />
               </div>
               <div>
                  <div className="flex items-center py-4">
                     <div className="mr-auto lg:hidden">
                        <FiltersPopover
                           onCategoryChange={handleCategoryChange}
                           selectedCategories={selectedCategories}
                        />
                     </div>
                     <div className="ml-auto">
                        <SortGames onSortChange={handleSortChange} />
                     </div>
                  </div>
                  {selectedCategories.length && !filteredProducts.length ? (
                     <h1 className="text-3xl font-semibold text-center text-white/80 my-6">
                        No products matches the applied filter.
                     </h1>
                  ) : (
                     <GamesList products={filteredProducts} />
                  )}
               </div>
            </section>
            <FeaturedGame title="Battle of the Warlords" />
         </main>
      </div>
   );
}
