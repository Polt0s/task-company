import React from 'react';
import { ICompany } from '../../Models/ICompany';
import Btn from '../Button/Btn';
import Input from '../Input/Input';
import { Formik, Form, FormikHelpers } from 'formik';
import StringSchema, { RequiredStringSchema } from 'yup/lib/string';
import { OptionalObjectSchema } from 'yup/lib/object';

interface ICompanyFormProps {
  onSubmit: (values: ICompany, formikHelpers: FormikHelpers<ICompany>) => void;
  initialValues: ICompany;
  validationSchema?: OptionalObjectSchema<{
    nameCompany: RequiredStringSchema<string | undefined, Record<string, any>>;
    address: RequiredStringSchema<string | undefined, Record<string, any>>;
    email: StringSchema<string | undefined, Record<string, any>, string | undefined>;
    phone: StringSchema<string | undefined, Record<string, any>, string | undefined>;
  }>
};

const CompanyForm: React.FC<ICompanyFormProps> = ({ onSubmit, initialValues, validationSchema }) => {

  return (
    <div className={'form-layout'}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {(formik) => (
          <Form>
            <Input
              id="nameCompany"
              type="text"
              name="nameCompany"
              handleChange={formik.handleChange}
              value={formik.values.nameCompany}
              placeholder="название компании"
              error={formik.touched.nameCompany && formik.errors.nameCompany}
              onBlur={formik.handleBlur}
              onFocus={formik.handleBlur}
            />
            <Input
              type="text"
              id="address"
              name="address"
              handleChange={formik.handleChange}
              value={formik.values.address}
              placeholder="адрес компании"
              error={formik.touched.address && formik.errors.address}
              onBlur={formik.handleBlur}
              onFocus={formik.handleBlur}
            />
            <Input
              type="email"
              id="email"
              name="email"
              handleChange={formik.handleChange}
              value={formik.values.email}
              placeholder="электронный адрес"
              error={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
              onFocus={formik.handleBlur}
            />
            <Input
              type="tel"
              id="phone"
              name="phone"
              handleChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="телефон компании"
              error={formik.touched.phone && formik.errors.phone}
              onBlur={formik.handleBlur}
              onFocus={formik.handleBlur}
            />
            <Btn style={{ margin: 5 }} type="submit" disabled={!formik.isValid}>Отправить</Btn>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default CompanyForm;