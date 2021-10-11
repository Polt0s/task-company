import React from 'react';
import { ICompany } from '../../Types/index';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Formik, Form, FormikHelpers } from 'formik';
import StringSchema, { RequiredStringSchema } from 'yup/lib/string';
import { OptionalObjectSchema } from 'yup/lib/object';
import cl from './CompanyForm.module.scss';

interface ICompanyFormProps {
  onSubmit: (values: ICompany, formikHelpers: FormikHelpers<ICompany>) => void;
  initialValues: ICompany;
  validationSchema?: OptionalObjectSchema<{
    nameCompany: RequiredStringSchema<string | undefined, Record<string, undefined>>;
    address: RequiredStringSchema<string | undefined, Record<string, undefined>>;
    email: StringSchema<string | undefined, Record<string, undefined>, string | undefined>;
    phone: StringSchema<string | undefined, Record<string, undefined>, string | undefined>;
  }>
};

const CompanyForm: React.FC<ICompanyFormProps> = ({ onSubmit, initialValues, validationSchema }) => {

  return (
    <div className={cl.formLayout}>
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
            <Button style={{ margin: 5 }} type="submit" disabled={!formik.isValid}>Отправить</Button>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default CompanyForm;