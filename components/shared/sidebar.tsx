"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
   House,
   Mail,
   Store,
   CreditCard,
   Trophy,
   Settings,
   LogOut,
} from "lucide-react";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const PRIMARY_LINKS = [
   {
      label: "Home",
      icon: <House className="w-6 h-6" color="#FFFFFFCC" />,
      href: "/",
   },
   {
      label: "Messages",
      icon: <Mail className="w-6 h-6" color="#FFFFFFCC" />,
      href: "/messages",
      disabled: true,
   },
   {
      label: "Game Store",
      icon: <Store className="w-6 h-6" color="#FFFFFFCC" />,
      href: "/games",
   },
   {
      label: "Payments",
      icon: <CreditCard className="w-6 h-6" color="#FFFFFFCC" />,
      href: "/payments",
      disabled: true,
   },
   {
      label: "Leaderboard",
      icon: <Trophy className="w-6 h-6" color="#FFFFFFCC" />,
      href: "/leaderboard",
      disabled: true,
   },
];

const SEC_LINKS = [
   {
      label: "Settings",
      icon: <Settings className="w-6 h-6" color="#FFFFFFCC" />,
      href: "/settings",
      disabled: true,
   },
   {
      label: "Logout",
      icon: <LogOut className="w-6 h-6" color="#FFFFFFCC" />,
      href: "/logout",
      disabled: true,
   },
];

export default function Sidebar() {
   const pathname = usePathname();
   const [isMounted, setIsMounted] = useState(false);
   const { isOpen, onOpen, onClose } = useMobileSidebar();

   useEffect(() => {
      setIsMounted(true);
   }, []);

   useEffect(() => {
      onClose();
   }, [pathname, onClose]);

   if (!isMounted) {
      return null;
   }

   return (
      <>
         <div className="w-full" onMouseEnter={onOpen}>
            <ul className="flex flex-col gap-8 items-center">
               {PRIMARY_LINKS.map((link) => (
                  <li key={link.label}>
                     <Link href={link.href} className="text-white/80 flex">
                        {link.icon}
                     </Link>
                  </li>
               ))}
               <Separator className="my-6" />
               {SEC_LINKS.map((link) => (
                  <li key={link.label}>
                     <Link href={link.href}>{link.icon}</Link>
                  </li>
               ))}
            </ul>
         </div>

         <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
               side={"left"}
               className="p-2 pt-24 bg-[#3D352A80] border-transparent"
               onMouseLeave={onClose}
               
            >
               <div className="absolute inset-0 bg-[#3D352A80] backdrop-blur-sm z-[-1]"></div>
               <ul className="flex flex-col gap-8">
                  {PRIMARY_LINKS.map((link) => (
                     <li key={link.href} className="pl-8">
                        <Link href={link.href} className="text-white/80 flex">
                           {link.icon} <p className="ml-4">{link.label}</p>
                        </Link>
                     </li>
                  ))}
                  <Separator className="my-6 w-full" />
                  {SEC_LINKS.map((link) => (
                     <li key={link.href} className="pl-8">
                        <Link href={link.href} className="text-white/80 flex">
                           {link.icon} <p className="ml-4">{link.label}</p>
                        </Link>
                     </li>
                  ))}
               </ul>
            </SheetContent>
         </Sheet>
      </>
   );
}
