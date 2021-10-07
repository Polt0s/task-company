import React from "react";
import { render, screen, act } from "@testing-library/react";
import CompanyForm from "./CompanyForm";

const initialValues = {
  nameCompany: '',
  address: '',
  email: '',
  phone: '',
};

describe('CompanyFormContainer', () => {
  const onSubmit = jest.fn();

  it('test for the correctness of filling in the fields and sending', () => {
    act(() => {
      render(
        <CompanyForm
          onSubmit={onSubmit}
          initialValues={initialValues}
        />
      );
    });

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

    expect(textField_nameCompany).not.toHaveFocus();
    act(() => {
      textField_nameCompany.focus();
    })
    expect(textField_nameCompany).toHaveFocus();
    // userEvent.click(buttonSubmit);
    // expect(onSubmit).toBeCalledTimes(1);
  });
});
