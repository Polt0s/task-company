import React from 'react';
import { useHistory } from 'react-router-dom';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { IUser } from '../../Models/IUser';
import { RouteNames } from '../../Router';
import { checkUser } from '../../Store/reducer/userService';
import LoginForm from '../../Components/LoginForm/LoginForm';
import * as yup from 'yup';

const LoginFormContainer: React.FC = () => {
  const router = useHistory();
  const { error } = useAppSelector((state) => state.userService);
  const dispatch = useAppDispatch();

  const onSubmit = (values: IUser) => {
    dispatch(checkUser(values.username, values.password));
    router.push(RouteNames.MAIN);
  };

  const initialValues: IUser = {
    username: '',
    password: '',
  };

  React.useEffect(() => { }, [error]);

  const validationSchema = yup.object({
    username: yup.string().min(4, 'имя должно содержать не менее 4 символов').required('обязательное поле'),
    password: yup.string().min(5, 'пароль не может быть меньше 6 символов').required('обязательное поле'),
  });

  return (
    <LoginForm onSubmit={onSubmit} error={error} initialValues={initialValues} validationSchema={validationSchema} />
  );
};

export default LoginFormContainer;