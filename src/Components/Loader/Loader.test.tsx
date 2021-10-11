import React from "react";
import { render, screen } from "@testing-library/react";
import { Loader } from './Loader';

describe('Loader', () => {

  it('check element', async () => {
    render(<Loader />);

    const loader = screen.getByTestId('loader');

    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('loader');
  });
});