import React from "react";
import { render, screen, act, fireEvent, cleanup } from "@testing-library/react";
import CompanyForm from "./CompanyForm";
import userEvent from "@testing-library/user-event";

const initialValues = {
  nameCompany: '',
  address: '',
  email: '',
  phone: '',
};

describe('CompanyFormContainer', () => {
  const onSubmit = jest.fn();
  afterEach(cleanup)

  it('test for the correctness of filling in the fields and sending', () => {
    render(
      <CompanyForm
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    );

    const buttonSubmit = screen.getByRole('button', { name: 'Отправить' });

    expect(buttonSubmit).toBeInTheDocument();

    const textField_nameCompany = screen.getByTestId('nameCompany');
    expect(textField_nameCompany).toBeInTheDocument();
    expect(textField_nameCompany).toHaveAttribute('type', 'text');
    expect(textField_nameCompany).toHaveAttribute('name', 'nameCompany');

    act(() => {
      fireEvent.blur(textField_nameCompany);
      fireEvent.change(textField_nameCompany, { target: { value: "123" } });
    });

    const textField_address = screen.getByTestId('address');
    expect(textField_address).toBeInTheDocument();
    expect(textField_address).toHaveAttribute('type', 'text');
    expect(textField_address).toHaveAttribute('name', 'address');

    const textField_email = screen.getByTestId('email');
    expect(textField_email).toBeInTheDocument();
    expect(textField_email).toHaveAttribute('type', 'email');
    expect(textField_email).toHaveAttribute('name', 'email');

    const textField_phone = screen.getByTestId('phone');
    expect(textField_phone).toBeInTheDocument();
    expect(textField_phone).toHaveAttribute('type', 'tel');
    expect(textField_phone).toHaveAttribute('name', 'phone');

    expect(textField_nameCompany).not.toHaveFocus();

    act(() => {
      textField_nameCompany.focus();
    });

    expect(textField_nameCompany).toHaveFocus();

    act(() => {
      fireEvent.click(buttonSubmit);
    });

  });
});
