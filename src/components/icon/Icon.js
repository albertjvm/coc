import React from "react";

export const Icon = function({ src, size = 20 }) {
  return (
    <img
      src={src}
      alt="icon"
      style={{
        height: `${size}px`,
        width: `${size}px`
      }}
    />
  );
};
