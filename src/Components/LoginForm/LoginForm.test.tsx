import React from "react";
import { fireEvent, render, screen, act, cleanup } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { IUser } from "../../Types/IUser";
import userEvent from "@testing-library/user-event";

const initialValues: IUser = {
  username: 'admin',
  password: 'admin',
};

describe('LoginForm', () => {
  const onSubmit = jest.fn();
  afterEach(cleanup);

  it('check for validating input fields and sending data', async () => {
    act(() => {
      render(
        <LoginForm
          onSubmit={onSubmit}
          error={''}
          initialValues={initialValues}
        />
      );
    });

    const textFields = await screen.findByRole('textbox');
    const buttonSubmit = await screen.findByRole('button', { name: /войти/i });

    expect(textFields).toBeInTheDocument();

    expect(buttonSubmit).toBeInTheDocument();

    const username = await screen.findByPlaceholderText(/введите ваше имя/i);

    expect(username).toHaveAttribute('type', 'text');

    expect(username).toHaveAttribute('name', 'username');

    await act(async () => {
      fireEvent.blur(username);
      fireEvent.change(username, { target: { value: 'adm' } });
    })

    const password = await screen.findByPlaceholderText(/введите пароль/i);

    expect(password).toHaveAttribute('type', 'password');

    expect(password).toHaveAttribute('name', 'password');

    expect(textFields).not.toHaveFocus();

    await act(async () => {
      textFields.focus();
    });

    expect(textFields).toHaveFocus();

    await act(async () => {
      userEvent.click(buttonSubmit);
    });

    expect(textFields).toBeEmptyDOMElement();
  });

  it('check for handling invalid input data', async () => {
    const error = 'неверное имя пользователя или пароль';
    act(() => {
      render(
        <LoginForm
          onSubmit={onSubmit}
          error={error}
          initialValues={initialValues}
        />
      );
    });

    expect(await screen.findByText(error)).toBeInTheDocument();
  });
});