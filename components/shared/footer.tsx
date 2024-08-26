import Image from "next/image";
import { Separator } from "../ui/separator";

const FOOTER_LINKS = [
   "Privacy Notice",
   "Terms of Service",
   "Cookie Policy",
   "Company Information",
   "Cookie Preferences",
];

const SOCIALS = ["/twitter.png", "/facebook.png", "/insta.png"];

export default function Footer() {
   return (
      <footer className="py-8 text-white/80 flex gap-8 flex-col items-center bg-black">
         <ul className="flex flex-col sm:flex-row items-center flex-wrap gap-4">
            {FOOTER_LINKS.map((link) => (
               <li
                  key={link}
                  className="text-lg hover:underline cursor-pointer"
               >
                  {link}
               </li>
            ))}
         </ul>
         <Separator />
         <p className="font-[300] text-white/60">
            Copyright © GameQuest, Inc. All rights reserved
         </p>
         <div className="flex gap-4 justify-center">
            {SOCIALS.map((icon) => (
               <div
                  key={icon}
                  className="flex items-center justify-center border border-white/80 rounded-lg p-1 cursor-pointer"
               >
                  <Image
                     src={icon}
                     width={22}
                     height={22}
                     alt={"social icon"}
                  />
               </div>
            ))}
         </div>
      </footer>
   );
}
