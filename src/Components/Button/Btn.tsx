import React from 'react';
import './button.sass';

interface BtnProps {
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  onFocus?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

const Btn: React.FC<BtnProps> = ({ children, type, style, onClick, disabled, onFocus, onBlur }) => {
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