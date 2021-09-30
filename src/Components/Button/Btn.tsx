import React from 'react';
import './button.sass';

interface BtnProps {
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Btn: React.FC<BtnProps> = ({ children, type, style, onClick }) => {
  return (
    <button className={'btn-main'} type={type} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;