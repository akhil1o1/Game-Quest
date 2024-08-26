"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

import { Search, Bell, ShoppingBag, SquareMenu } from "lucide-react";

import { cn } from "@/lib/utils";
import { poppins, pressStart } from "@/app/fonts";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const LINKS = [
   { label: "Home", href: "/" },
   { label: "Game Store", href: "/games" },
   { label: "Leaderboard", href: "/leaderboard" },
];

const notifications = [
   {
      id: 1,
      message: "Achievement unlocked! You completed 'Dragon Slayer' quest.",
   },
   { id: 2, message: "New friend request from 'GamerPro123'." },
   { id: 3, message: "Your daily reward is ready! Collect your bonus now." },
   { id: 4, message: "You ranked up to 'Gold Tier' in the leaderboard." },
   { id: 5, message: "New DLC available: Explore the 'Frozen Wastelands'." },
];

export default function Topbar() {
   const { isSignedIn } = useUser();
   const currentPath = usePathname();
   const { onOpen } = useMobileSidebar();

   const topBarBgColor = currentPath === "/" ? "bg-black" : "bg-[#2B2417]";

   return (
      <header
         className={cn(
            "h-24  pr-8 flex items-center fixed top-0 w-full z-50",
            poppins.className,
            topBarBgColor
         )}
      >
         <div
            className={cn(
               "w-28 flex items-center justify-center h-full",
               currentPath === "/" && "border-r border-[#FFFFFF4D]"
            )}
         >
            <Link
               href={"/"}
               className={cn(
                  "text-[#DAB785] text-4xl text-center w-28 hidden md:block",
                  pressStart.className
               )}
            >
               GQ
            </Link>
            <Button size={"icon"} className="block md:hidden" onClick={onOpen}>
               <SquareMenu className="w-12 h-12 text-white/80" />
            </Button>
         </div>

         <nav className="hidden xl:block ml-10">
            <ul className="flex flex-wrap gap-8 text-lg font-[500] text-white/80">
               {LINKS.map((link, index) => (
                  <li key={link.label} className="flex gap-8">
                     <Link
                        href={link.href}
                        className={cn(
                           "hover:text-yellow-100 transition",
                           currentPath === link.href && "text-yellow-100"
                        )}
                     >
                        {link.label}
                     </Link>
                     {index !== 2 && (
                        <Separator orientation="vertical" className="h-8" />
                     )}
                  </li>
               ))}
            </ul>
         </nav>

         <div className="flex items-center justify-center gap-4 ml-auto">
            <div className="rounded-full border border-white/80 items-center gap-2 px-4 w-96 hidden md:flex">
               <Search className="w-6 h-6" color="white" />
               <Input
                  placeholder="What are you looking for?"
                  className="border-none bg-inherit text-white/80 text-xs placeholder:text-white/80"
               />
            </div>
            <Separator orientation="vertical" className="h-8" />

            <Notification>
               <Button
                  className="rounded-full relative bg-inherit hover:bg-inherit"
                  variant={"outline"}
                  size={"icon"}
               >
                  <Bell className="w-6 h-6" color="white" />
                  <div className="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-3" />
               </Button>
            </Notification>

            <Separator orientation="vertical" className="h-8" />

            <Button
               className="rounded-full bg-inherit hover:bg-inherit"
               variant={"outline"}
               size={"icon"}
            >
               <ShoppingBag className="w-6 h-6" color="white" />
            </Button>

            {!isSignedIn && (
               <Link
                  href={"/sign-in"}
                  className="bg-inherit border border-white/80 rounded-3xl p-2 text-white/80"
               >
                  SignIn
               </Link>
            )}

            <UserButton
               afterSwitchSessionUrl="/"
               appearance={{
                  elements: {
                     avatarBox: {
                        height: 40,
                        width: 40,
                     },
                  },
               }}
            />
         </div>
      </header>
   );
}

function Notification({ children }: { children: React.ReactNode }) {
   return (
      <Popover>
         <PopoverTrigger asChild>{children}</PopoverTrigger>
         <PopoverContent className="w-80 bg-[#2B2417]" side={"bottom"}>
            <div className="space-y-2 text-white/80">
               {notifications.map((notif) => (
                  <div key={notif.id}>
                     <p className="mb-2">{notif.message}</p>
                     <Separator />
                  </div>
               ))}
            </div>
         </PopoverContent>
      </Popover>
   );
}
