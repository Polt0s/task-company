import React from "react";
import { render, screen } from "@testing-library/react";
import { Loader } from './Loader';

describe('Loader', () => {

  it('check the show loader', async () => {
    render(<Loader />);

    const loader = screen.getByTestId('loader');

    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('loader');
  });

});