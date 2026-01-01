import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>

      <p className="text-2xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-600">
        Sorry! The page you are looking for was not found.
        
      </p>

      <Link to="/" className="mt-6 btn btn-error text-white">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
