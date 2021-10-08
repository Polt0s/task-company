import React from 'react';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { ICompany } from '../../Types/index';
import { addCompany } from '../../Store/reducer/company';
import * as yup from 'yup';
import CompanyForm from '../../Components/CompanyForm/CompanyForm';
import { onlyLetters, onlyNumbers } from '../../utils/RegExp';

const CompanyFormContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const company = useAppSelector(state => state.company.company);

  const initialValues: ICompany = {
    nameCompany: '',
    address: '',
    email: '',
    phone: '',
    id: 0,
  };

  const onSubmit = (values: ICompany) => {
    dispatch(addCompany([{ ...values, id: Date.now() }, ...company]));
  };

  const validationSchema = yup.object({
    nameCompany: yup.string().matches(onlyLetters, 'имя компании не должно содержать цифры').required('обязательное поле'),
    address: yup.string().min(6, 'адрес должен быть больше 6 символов').required('обязательное поле'),
    email: yup.string().email('невалидный email'),
    phone: yup.string().matches(onlyNumbers, 'недопустимые символы'),
  });

  return (
    <CompanyForm onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues} />
  );
};

export default CompanyFormContainer;