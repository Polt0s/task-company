import React from 'react';
import './button.sass';

const Btn: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, type, style, onClick, disabled, onFocus, onBlur }) => {
  return (
    <button className={'btn-main'}
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled}
      onFocus={onFocus}
      onBlur={onBlur}>
      {children}
    </button>
  );
};

export default Btn;