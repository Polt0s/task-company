import React from 'react';
import { useHistory } from 'react-router-dom';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { IUser } from '../../Models/IUser';
import { RouteNames } from '../../Router';
import { setAddUser } from '../../Store/reducer/userService';
import LoginForm from '../../Components/LoginForm/LoginForm';

const LoginFormContainer: React.FC = () => {
  const router = useHistory();
  const [values, setValues] = React.useState<IUser>({ username: '', password: '' });
  const { error } = useAppSelector((state) => state.userService);
  const dispatch = useAppDispatch();

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setAddUser(values.username, values.password));
    router.push(RouteNames.MAIN);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <LoginForm onSubmit={onSubmit} handleChange={handleChange} error={error} values={values} />
  );
};

export default LoginFormContainer;