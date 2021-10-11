import React from 'react';
import { IUser } from '../../Types/index';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.scss';
import { Formik, Form, FormikHelpers } from 'formik';
import { RequiredStringSchema } from 'yup/lib/string';
import { OptionalObjectSchema } from 'yup/lib/object';


interface ILoginFormProps {
  onSubmit: (values: IUser, formikHelpers: FormikHelpers<IUser>) => void;
  error: string;
  initialValues: IUser;
  validationSchema?: OptionalObjectSchema<{
    username: RequiredStringSchema<string | undefined, Record<string, undefined>>;
    password: RequiredStringSchema<string | undefined, Record<string, undefined>>;
  }>
};

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit, error, initialValues, validationSchema }) => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => (
        <Form style={{ width: '50%' }}>
          {error ? <h2 id="text-error" className={'text-error'}>{error}</h2> : ''}
          <Input
            type="text"
            value={formik.values.username}
            handleChange={formik.handleChange}
            placeholder="Введите ваше имя"
            name="username"
            id="username"
            error={formik.touched.username && formik.errors.username}
            onBlur={formik.handleBlur}
            onFocus={formik.handleBlur}
          />
          <Input
            type="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            placeholder="Введите пароль"
            name="password"
            id="password"
            error={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            onFocus={formik.handleBlur}
          />
          <Button type="submit" style={{ margin: 5 }} disabled={!formik.isValid}>Войти</Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;