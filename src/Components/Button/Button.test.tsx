import React from "react";
import { render, screen } from "@testing-library/react";
import Btn from "./Btn";
import userEvent from "@testing-library/user-event";

describe('test Btn-component', () => {
  const onClick = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  it('testing props Btn-component', () => {
    render(
      <Btn onClick={onClick} onFocus={onFocus} type={'submit'} style={{ width: '100%' }} onBlur={onBlur} />
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(onBlur).not.toBeCalledTimes(1);
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveStyle('width: 100%');
    userEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
    expect(onFocus).toBeCalledTimes(1);

  });

  it('testing disabled Btn-component', () => {
    render(<Btn disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});