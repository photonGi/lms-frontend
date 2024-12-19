import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <InfinitySpin
        visible={true}
        width="200"
        color="#3F77F3"
        ariaLabel="infinity-spin-loading"
      />
      <p className="mt-4 text-lg font-semibold text-gray-700">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingSpinner;
