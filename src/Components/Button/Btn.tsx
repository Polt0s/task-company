import React from 'react';
import './button.sass';

interface BtnProps {
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties;
  onClick?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

const Btn: React.FC<BtnProps> = ({ children, type, style }) => {
  return (
    <button className={'btn-main'} type={type} style={style}>
      {children}
    </button>
  );
};

export default Btn;