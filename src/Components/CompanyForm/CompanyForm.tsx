import React from 'react';
import { ICompany } from '../../Models/ICompany';
import Btn from '../Button/Btn';
import Input from '../Input/Input';

interface ICompanyFormProps {
  onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  errorsList: ICompany;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: ICompany;
};

const CompanyForm: React.FC<ICompanyFormProps> = ({ onSubmit, errorsList, handleChange, values }) => {

  return (
    <div className={'form-layout'}>
      <form onSubmit={onSubmit}>
        <Input id="nameCompany" type="text" name="nameCompany" handleChange={handleChange} value={values.nameCompany} placeholder="название компании" error={errorsList.nameCompany} />
        <Input type="text" name="address" handleChange={handleChange} value={values.address} placeholder="адрес компании" error={errorsList.address} />
        <Input type="email" name="email" handleChange={handleChange} value={values.email} placeholder="электронный адрес" error={errorsList.email} />
        <Input type="tel" name="phone" handleChange={handleChange} value={values.phone} placeholder="телефон компании" error={errorsList.phone} />
        <Btn style={{ margin: 5 }} type="submit">Отправить</Btn>
      </form>
    </div>
  );
};

export default CompanyForm;