import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      <h1 className="text-6xl font-bold">🚧 Page Not Ready 🚧</h1>
      <p className="text-lg mt-4 text-gray-400">
        Oops! The page you're looking for is still under development.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
