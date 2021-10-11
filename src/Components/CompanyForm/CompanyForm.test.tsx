import React from "react";
import { render, screen, act, fireEvent, cleanup } from "@testing-library/react";
import { CompanyForm } from "./CompanyForm";

const initialValues = {
  nameCompany: '',
  address: '',
  email: '',
  phone: '',
};

describe('CompanyForm', () => {
  const onSubmit = jest.fn();
  afterEach(cleanup)

  it('check for the correctness of filling in the fields and sending', async () => {
    act(() => {
      render(
        <CompanyForm
          onSubmit={onSubmit}
          initialValues={initialValues}
        />
      );
    });

    const buttonSubmit = await screen.findByRole('button', { name: 'Отправить' });

    expect(buttonSubmit).toBeInTheDocument();

    const textField_nameCompany = await screen.findByTestId('nameCompany');
    expect(textField_nameCompany).toBeInTheDocument();
    expect(textField_nameCompany).toHaveAttribute('type', 'text');
    expect(textField_nameCompany).toHaveAttribute('name', 'nameCompany');

    await act(async () => {
      fireEvent.blur(textField_nameCompany);
      fireEvent.change(textField_nameCompany, { target: { value: "123" } });
    });

    const textField_address = await screen.findByTestId('address');
    expect(textField_address).toBeInTheDocument();
    expect(textField_address).toHaveAttribute('type', 'text');
    expect(textField_address).toHaveAttribute('name', 'address');

    const textField_email = await screen.findByTestId('email');
    expect(textField_email).toBeInTheDocument();
    expect(textField_email).toHaveAttribute('type', 'email');
    expect(textField_email).toHaveAttribute('name', 'email');

    const textField_phone = await screen.findByTestId('phone');
    expect(textField_phone).toBeInTheDocument();
    expect(textField_phone).toHaveAttribute('type', 'tel');
    expect(textField_phone).toHaveAttribute('name', 'phone');

    expect(textField_nameCompany).not.toHaveFocus();

    await act(async () => {
      (textField_nameCompany).focus();
    });

    expect(textField_nameCompany).toHaveFocus();

    await act(async () => {
      fireEvent.click(buttonSubmit);
    });

  });
});
