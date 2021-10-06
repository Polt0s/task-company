import React from 'react';
import { IUser } from '../../Models/IUser';
import Btn from '../Button/Btn';
import Input from '../Input/Input';
import '../index.sass';
import { Formik, Form, FormikHelpers } from 'formik';
import { RequiredStringSchema } from 'yup/lib/string';
import { OptionalObjectSchema } from 'yup/lib/object';

interface ILoginFormProps {
  onSubmit: (values: IUser, formikHelpers: FormikHelpers<IUser>) => void;
  error: string;
  initialValues: IUser;
  validationSchema?: OptionalObjectSchema<{
    username: RequiredStringSchema<string | undefined, Record<string, any>>;
    password: RequiredStringSchema<string | undefined, Record<string, any>>;
  }>
};

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit, error, initialValues, validationSchema }) => {
  const ref: React.RefObject<HTMLHeadingElement> = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    ref.current = error;
  }, [error]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => (
        <Form style={{ width: '50%' }}>
          {error ? <h2 ref={ref} id="text-error" className={'text-error'}>{error}</h2> : ''}
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
          <Btn type="submit" style={{ margin: 5 }} disabled={!formik.isValid}>Войти</Btn>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;