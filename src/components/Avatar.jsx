import React from 'react';

function Avatar({ size, alt, ...others }) {
  return (
    <img
      {...others}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full cursor-pointer"
    />
  );
}

export default Avatar;
