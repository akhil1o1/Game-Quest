export default function Blip({ text }: { text: string }) {
   return (
      <div className="flex items-center gap-1 mt-6">
         <div className="w-2 h-2 bg-[#00FF0A] drop-shadow-2xl shadow-2xl rounded-full" />
         <p className="text-xs text-white/80">40 of your friends are playing</p>
      </div>
   );
}
