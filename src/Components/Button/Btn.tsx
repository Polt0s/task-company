import React from 'react';
import './button.scss';

const Btn: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={'btn-main'}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Btn;