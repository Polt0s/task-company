import React from 'react';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { useForm } from '../../Hooks/useForm';
import { ICompany } from '../../Models/ICompany';
import { addCompany } from '../../Store/reducer/company';
import validateForm from '../../utils/ValidateForm';
import CompanyForm from './CompanyForm';

const initialValues: ICompany = {
  nameCompany: '',
  address: '',
  email: '',
  phone: '',
};

const CompanyFormContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const company = useAppSelector(state => state.company.company);

  const { handleChange, values, errors, setValues } = useForm(validateForm, initialValues);

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues(initialValues);
    dispatch(addCompany([values, ...company]));
  };

  return (
    <CompanyForm onSubmit={onSubmit} errorsList={errors} handleChange={handleChange} values={values} />
  );
};

export default CompanyFormContainer;