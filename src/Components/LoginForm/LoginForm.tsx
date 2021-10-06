import React from 'react';
import { IUser } from '../../Models/IUser';
import Btn from '../Button/Btn';
import Input from '../Input/Input';
import '../index.sass';

interface ILoginFormProps {
  onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  values: IUser;
};

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit, handleChange, error, values }) => {
  const ref: React.RefObject<HTMLHeadingElement> = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    ref.current = error;
  }, [error]);

  return (
    <form onSubmit={onSubmit}>
      {error ? <h2 ref={ref} id="text-error" className={'text-error'}>{error}</h2> : ''}
      <Input type="text" value={values.username} handleChange={handleChange} placeholder="Введите ваше имя" name="username" />
      <Input type="password" value={values.password} handleChange={handleChange} placeholder="Введите пароль" name="password" />
      <Btn type="submit" style={{ margin: 5 }}>Войти</Btn>
    </form>
  );
};

export default LoginForm;