"use client";

import { SignedOut, UserButton, SignedIn, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-center">
      <div className="max-w-content mt-5 flex w-full items-center justify-between text-xl font-semibold">
        Gallery
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div className="flex flex-row gap-5">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={() => router.refresh()}
              />
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
