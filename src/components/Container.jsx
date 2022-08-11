import React from 'react';

function Container({ children }) {
  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="container mx-auto pt-4">{children}</div>
    </div>
  );
}

export default Container;
