import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
   return (
      <div className="bg-black pt-40 w-full h-full flex items-center justify-center">
         <SignIn />
      </div>
   );
}
