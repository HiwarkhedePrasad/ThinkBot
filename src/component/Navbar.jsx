import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <div className="fixed top-0 left-0 z-50 w-full text-white flex flex-col bg-black">
      {/* Header */}
      <header className="flex justify-between items-center p-2 pr-4 border-b border-gray-800">
        <div className="flex flex-row items-center space-x-2">
          <img
            src="/images/logo_without_name.png"
            alt="ThinkBot Logo"
            className="h-12 w-auto"
          />
          <span className="text-white text-lg font-semibold">ThinkBot</span>
        </div>

        <div className="flex items-center">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton>
              <button className="bg-white text-black px-4 py-2 rounded-full font-bold">
                Log in
              </button>
            </SignInButton>
          )}
        </div>
      </header>
    </div>
  );
}
