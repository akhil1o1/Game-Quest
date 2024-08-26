import Image from "next/image";

export default function AvailableOn() {
   return (
      <div className="flex gap-2 items-center text-white/80">
         <div>Available on :</div>
         <div>
            <Image
               src={"/cta-img.png"}
               width={120}
               height={60}
               alt="download"
            />
         </div>
      </div>
   );
}
