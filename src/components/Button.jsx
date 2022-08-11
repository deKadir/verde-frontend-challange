import React from 'react';
import classNames from 'classnames';

function Button({ children, className, ...others }) {
  const btn = 'px-4 py-2 bg-blue-600 text-white rounded-lg';
  return (
    <button {...others} className={classNames(btn, className)}>
      {children}
    </button>
  );
}

export default Button;
