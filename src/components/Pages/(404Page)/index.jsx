import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";


const NotFound = () => {

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md text-center">
        <AlertCircle size={60} className="text-red-500 mb-4 mx-auto" />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/dashboard"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
    </>
  );
};

export default NotFound;
