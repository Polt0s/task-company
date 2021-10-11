import React from 'react';
import cl from './Button.module.scss';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={cl.btnMain}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;