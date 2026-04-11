import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-800 text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-sky-400 mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

        <p className="text-gray-400 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-xl transition duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

