"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export function MobileSidebar({children} : {children : React.ReactNode}) {
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
         <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side={"left"} className="p-2 pt-10">
               {children}
            </SheetContent>
         </Sheet>
      </>
   );
}
