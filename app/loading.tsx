import { LoadingWheel } from "@/components/shared/loading-wheel";

export default function Loading() {
   return (
      <div className="bg-black w-[100vw] h-[100vh] flex items-center justify-center">
         <LoadingWheel />
      </div>
   );
}
