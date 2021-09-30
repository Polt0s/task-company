import React from 'react';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { useForm } from '../../Hooks/useForm';
import { ICompany } from '../../Models/ICompany';
import { addCompany } from '../../Store/reducer/company';
import validateForm from '../../utils/ValidateForm';
import Input from '../Input/Input';

const initialValues: ICompany = {
  nameCompany: '',
  address: '',
  email: '',
  phone: '',
};

const FormCompany: React.FC = () => {
  const dispatch = useAppDispatch();
  const company = useAppSelector(state => state.company.company);
  const { handleChange, values, errors, setValues } = useForm(validateForm, initialValues);

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues(initialValues);
    dispatch(addCompany([values, ...company]));
  };

  return (
    <div className={'form-layout'}>
      <form onSubmit={onSubmit}>
        <Input type="text" name="nameCompany" handleChange={handleChange} value={values.nameCompany} placeholder="Название компании" error={errors.nameCompany} />
        <Input type="text" name="address" handleChange={handleChange} value={values.address} placeholder="адрес компании" error={errors.address} />
        <Input type="text" name="email" handleChange={handleChange} value={values.email} placeholder="электронный адрес" error={errors.email} />
        <Input type="tel" name="phone" handleChange={handleChange} value={values.phone} placeholder="телефон компании" error={errors.phone} />
        <button type="submit">отправить</button>
      </form>
    </div>
  );
};

export default FormCompany;