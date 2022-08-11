import React from 'react';

function Response({ success, message }) {
  const color = success ? 'text-green-400' : 'text-red-600';
  return (
    <span className={`block ${color} text-xl font-medium my-4`}>{message}</span>
  );
}

export default Response;
