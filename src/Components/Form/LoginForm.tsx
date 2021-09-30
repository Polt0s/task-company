import React from 'react';
import { useHistory } from 'react-router-dom';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { IUser } from '../../Models/IUser';
import { RouteNames } from '../../Router';
import { setAddUser } from '../../Store/reducer/userService';
import Btn from '../Button/Btn';
import Input from '../Input/Input';

const LoginForm: React.FC = () => {
  const router = useHistory();
  const [values, setValues] = React.useState<IUser>({ username: '', password: '' });
  const { error } = useAppSelector((state) => state.userService);
  const dispatch = useAppDispatch();
  const errorRef = React.useRef<HTMLHeadingElement>(null);

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setAddUser(values.username, values.password));
    router.push(RouteNames.MAIN);
  };
  React.useEffect(() => {
    errorRef.current = error;
  }, [error])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <form onSubmit={onSubmit}>
      {error ? <h2 ref={errorRef} id="text-error" style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{error}</h2> : ''}
      <Input type="text" value={values.username} handleChange={handleChange} placeholder="Введите ваше имя" name="username" />
      <Input type="password" value={values.password} handleChange={handleChange} placeholder="Введите пароль" name="password" />
      <Btn type="submit" style={{ margin: 5 }}>Войти</Btn>
    </form>
  );
};

export default LoginForm;