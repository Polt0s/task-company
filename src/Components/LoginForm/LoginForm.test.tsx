import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { IUser } from "../../Models/IUser";
import userEvent from "@testing-library/user-event";

const initialValues: IUser = {
  username: 'admin',
  password: 'admin',
};

describe('testing LoginForm', () => {
  const onSubmit = jest.fn();
  const handleChange = jest.fn();

  it('test for validating input fields and sending data', () => {
    render(
      <LoginForm
        onSubmit={onSubmit}
        handleChange={handleChange}
        error={''}
        values={initialValues}
      />
    );
    const textFields = screen.getByRole('textbox');
    const buttonSubmit = screen.getByRole('button', { name: /войти/i });
    expect(textFields).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();

    const username = screen.getByPlaceholderText(/введите ваше имя/i);
    expect(username).toHaveAttribute('type', 'text');
    expect(username).toHaveAttribute('name', 'username');

    fireEvent.change(username, { target: { value: 'adm' } });
    expect(handleChange).toBeCalledTimes(1);

    const password = screen.getByPlaceholderText(/введите пароль/i);
    expect(password).toHaveAttribute('type', 'password');
    expect(password).toHaveAttribute('name', 'password');

    expect(textFields).not.toHaveFocus();
    textFields.focus();
    expect(textFields).toHaveFocus();

    userEvent.click(buttonSubmit);
    expect(onSubmit).toBeCalledTimes(1);
    expect(textFields).toBeEmptyDOMElement();
  });

  it('test for handling invalid input data', async () => {
    const error = 'неверное имя пользователя или пароль';
    render(
      <LoginForm
        onSubmit={onSubmit}
        handleChange={handleChange}
        error={error}
        values={initialValues}
      />
    );
    expect(await screen.findByText(error)).toBeInTheDocument();
  });
});