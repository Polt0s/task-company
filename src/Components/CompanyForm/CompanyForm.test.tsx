import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CompanyForm from "./CompanyForm";

const initialValues = {
  nameCompany: '',
  address: '',
  email: '',
  phone: '',
};

describe('CompanyFormContainer', () => {
  const onSubmit = jest.fn();
  const handleChange = jest.fn();

  it('test for the correctness of filling in the fields and sending', () => {
    render(
      <CompanyForm
        onSubmit={onSubmit}
        errorsList={initialValues}
        handleChange={handleChange}
        values={initialValues}
      />
    );

    const buttonSubmit = screen.getByRole('button', { name: 'Отправить' });
    expect(buttonSubmit).toBeInTheDocument();

    const textField_nameCompany = screen.getByTestId('nameCompany');
    expect(textField_nameCompany).toBeInTheDocument();
    expect(textField_nameCompany).toHaveAttribute('type', 'text');
    expect(textField_nameCompany).toHaveAttribute('name', 'nameCompany');

    const textField_address = screen.getByPlaceholderText(/адрес компании/i);
    expect(textField_address).toBeInTheDocument();
    expect(textField_address).toHaveAttribute('type', 'text');
    expect(textField_address).toHaveAttribute('name', 'address');

    const textField_email = screen.getByPlaceholderText(/электронный адрес/i);
    expect(textField_email).toBeInTheDocument();
    expect(textField_email).toHaveAttribute('type', 'email');
    expect(textField_email).toHaveAttribute('name', 'email');

    const textField_phone = screen.getByPlaceholderText(/телефон компании/i);
    expect(textField_phone).toBeInTheDocument();
    expect(textField_phone).toHaveAttribute('type', 'tel');
    expect(textField_phone).toHaveAttribute('name', 'phone');

    fireEvent.change(textField_nameCompany, { target: { value: 'пр' } });
    expect(handleChange).toBeCalledTimes(1);

    expect(textField_nameCompany).not.toHaveFocus();
    textField_nameCompany.focus();
    expect(textField_nameCompany).toHaveFocus();

    userEvent.click(buttonSubmit);
    expect(onSubmit).toBeCalledTimes(1);
  });

  it('test for handling invalid input data', async () => {
    const initialValuesError = {
      nameCompany: 'только буквы',
      address: 'номер не может быть меньше 6 цифр',
      email: 'невалидный email',
      phone: 'только цифры',
    }
    render(
      <CompanyForm
        onSubmit={onSubmit}
        errorsList={initialValuesError}
        handleChange={handleChange}
        values={initialValues}
      />
    );
    expect(await screen.findByText(/только буквы/i)).toBeInTheDocument();
    expect(await screen.findByText(/номер не может быть меньше 6 цифр/i)).toBeInTheDocument();
    expect(await screen.findByText(/невалидный email/i)).toBeInTheDocument();
    expect(await screen.findByText(/только цифры/i)).toBeInTheDocument();
  });
});
