import React from 'react';
import './input.sass';

interface InputProps {
  placeholder?: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string | false | undefined;
  name: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, handleChange, type, error, name, id, onBlur, onFocus }) => {
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        className={'input'}
        placeholder={placeholder}
        data-testid={id}
      />
      {error && (
        <p className={'input__text-error'}>{error}</p>
      )}
    </>
  );
};

export default Input;