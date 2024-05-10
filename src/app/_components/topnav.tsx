import { SignedOut, UserButton, SignedIn, SignInButton } from "@clerk/nextjs";

export const TopNav = () => (
  <nav className="flex justify-center">
    <div className="max-w-content mt-5 flex w-full items-center justify-between text-xl font-semibold">
      Gallery
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  </nav>
);
