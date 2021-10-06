import React from "react";
import { screen, render } from "@testing-library/react";
import Footer from "./Footer";
import { IUserInfo } from "../../Models/IUserInfo";

const userData: IUserInfo = {
  name: 'Dan Abramov',
  company: '@facebook',
  avatar_url: '',
  followers: 68949,
};

describe('footer-component test', () => {

  it('test for correct data retrieval', async () => {
    render(<Footer userData={userData} />)

    expect(await screen.findByText(userData.name)).toBeInTheDocument();
    expect(await screen.findByText(userData.company)).toBeInTheDocument();
    expect(await screen.findByText(userData.followers)).toBeInTheDocument();
    expect(screen.getByAltText(/user_avatar_url/i)).toHaveClass('footer-main__img');
  });
});