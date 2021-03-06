import React from "react";
import { screen, render } from "@testing-library/react";
import { Footer } from "./Footer";
import { IUserInfo } from "../../Types/index";

const userData: IUserInfo = {
  name: 'Dan Abramov',
  company: '@facebook',
  avatar_url: '',
  followers: 68949,
};

describe('Footer', () => {

  it('check for correct data retrieval', async () => {
    render(<Footer userData={userData} />);

    expect(await screen.findByText(userData.name)).toBeInTheDocument();

    expect(await screen.findByText(userData.company)).toBeInTheDocument();

    expect(await screen.findByText(userData.followers)).toBeInTheDocument();

  });
});