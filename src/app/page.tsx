import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/images";

export default async function HomePage() {
  return (
    <main className="m-10 flex justify-center">
      <SignedOut>
        <div className="flex h-full w-full justify-center text-2xl">
          Please sign in
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
