import { Loader } from "lucide-react";

export function LoadingWheel() {
   return (
      <div>
         <Loader className="w-12 h-12 animate-spin" color="white" />
      </div>
   );
}
