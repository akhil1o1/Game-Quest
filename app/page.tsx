import Sidebar from "@/components/shared/sidebar";
import Hero from "@/components/home-page/hero";
import TrendingGames from "@/components/home-page/trending-games";
import FeaturedGame from "@/components/shared/featured-game";

export default function Home() {
   return (
      <div className="relative">
         <aside className="w-28 pt-28 border-r border-[#FFFFFF4D] absolute h-full hidden md:block">
            <Sidebar />
         </aside>
         <main className="bg-black pt-28">
            <Hero />
            <TrendingGames />
            <FeaturedGame title="Warlords"/>
         </main>
      </div>
   );
}
