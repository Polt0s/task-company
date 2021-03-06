import React from "react";
import { fireEvent, render, screen, act } from "@testing-library/react";
import { Input } from "./Input";

describe('Input', () => {
  const handleChange = jest.fn();

  it('check validation props', () => {
    render(
      <Input name="test" handleChange={handleChange} placeholder="test-placeholder" value="" type="email" error="" id="test" />
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();

    expect(screen.getByTestId('test')).toBeInTheDocument();

    expect(input).toHaveAttribute('name', 'test');

    expect(input).toHaveAttribute('value', '');

    expect(input).toHaveAttribute('type', 'email');

    expect(screen.getByPlaceholderText('test-placeholder'));

    act(() => {
      fireEvent.change(input, { target: { value: 'dd' } });
    });

    expect(handleChange).toBeCalledTimes(1);

    expect(input).not.toHaveFocus();

    input.focus();

    expect(input).toHaveFocus();
  });
});