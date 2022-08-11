import React from 'react';

function Avatar({ size, ...others }) {
  return (
    <img
      {...others}
      width={size}
      height={size}
      className="rounded-full cursor-pointer"
    />
  );
}

export default Avatar;
