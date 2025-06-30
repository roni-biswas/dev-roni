import React, { useState } from "react";

const ImageWithLoader = ({ src, alt, className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative w-full h-56 overflow-hidden rounded-lg ${className}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-base-200 z-10">
          <span className="loading loading-spinner text-primary w-10 h-10"></span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default ImageWithLoader;
