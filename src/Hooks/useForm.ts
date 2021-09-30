import React from 'react';
import { ICompany } from '../Models/ICompany';

export const useForm = (validate: any, initialValues: ICompany) => {
  const [values, setValues] = React.useState<ICompany>(initialValues);
  const [errors, setErrors] = React.useState<ICompany>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
    setErrors(validate(name, value))
  };

  return { handleChange, values, errors, setValues }
};