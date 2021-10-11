import React from "react";
import { render, screen, act } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe('Button', () => {
  const onClick = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  it('check button props', () => {
    render(
      <Button
        onClick={onClick}
        onFocus={onFocus}
        type={'submit'}
        style={{ width: '100%' }}
        onBlur={onBlur} />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    expect(onBlur).not.toBeCalledTimes(1);

    expect(button).toHaveAttribute('type', 'submit');

    expect(button).toHaveStyle('width: 100%');

    act(() => {
      userEvent.click(button);
    });

    expect(onClick).toBeCalledTimes(1);

    expect(onFocus).toBeCalledTimes(1);

  });

  it('check button is disabled', () => {
    render(<Button disabled={true} />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});