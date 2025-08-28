import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  
  return (
    <div className="fixed top-0 left-0 z-50 w-full text-white flex flex-col bg-black/95 backdrop-blur-sm border-b border-gray-800/50 shadow-lg">
      {/* Header */}
      <header className="flex justify-between items-center px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        {/* Logo Section */}
        <div className="flex flex-row items-center space-x-2 sm:space-x-3 min-w-0">
          <img
            src="/images/logo_without_name.png"
            alt="ThinkBot Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 flex-shrink-0 rounded-lg"
          />
          <span className="text-white text-base sm:text-lg lg:text-xl font-semibold truncate">
            ThinkBot
          </span>
        </div>
        
        {/* User Section */}
        <div className="flex items-center flex-shrink-0">
          {isSignedIn ? (
            <div className="scale-90 sm:scale-100">
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10",
                    userButtonPopoverCard: "bg-gray-900 border-gray-700",
                    userButtonPopoverActionButton: "text-gray-200 hover:bg-gray-800",
                  }
                }}
              />
            </div>
          ) : (
            <SignInButton>
              <button className="bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-gray-100 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20">
                Log in
              </button>
            </SignInButton>
          )}
        </div>
      </header>
    </div>
  );
}
