import React from 'react';
import './Button.scss';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={'btn-main'}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;