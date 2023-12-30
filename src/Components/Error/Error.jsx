import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Oops! 😬</h1>
        <p className="text-lg text-gray-700 mb-4">
          Something went wrong. The server responded with {status} - {statusText}.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Please try again later or contact support.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
