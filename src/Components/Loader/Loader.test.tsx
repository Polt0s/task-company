import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from './Loader';

describe('text Loader', () => {

  it('availability test loader', async () => {
    render(<Loader />);

    const loader = screen.getByTestId('loader');

    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('loader');
  });
});