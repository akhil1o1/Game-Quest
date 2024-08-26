export default function ClerkLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="bg-black pt-40 w-full h-full flex items-center justify-center">
       {children}
      </div>
   );
}
