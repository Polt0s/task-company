import React from 'react';
import './input.sass';

interface InputProps {
  validate?: () => void;
  placeholder?: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, handleChange, type, error, name }) => {
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={'input'}
        placeholder={placeholder}
      />
      {error && (
        <span className={'input__text-error'}>{error}</span>
      )}
    </>
  );
};

export default Input;