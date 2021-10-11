import React from "react";
import { render, screen } from "@testing-library/react";
import { Loader } from './Loader';
import { Cards } from "../Cards";

describe('Loader', () => {

  it('check the show loader', async () => {
    render(<Loader />);

    const loader = screen.getByTestId('loader');

    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('loader');
  });

  it('check the not show loader', () => {
    const changeSelectedPost = jest.fn();

    render(
      <Cards companyList={[]} changeSelectedPost={changeSelectedPost} isLoading={false} />
    );

    const loader = screen.queryByTestId('loader');

    expect(loader).toBeNull();
  });
});