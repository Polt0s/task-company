import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { IAboutMe } from "../../Models/IAboutMe";
import userEvent from "@testing-library/user-event";

const aboutMeList: IAboutMe = {
  avatar_url: '',
  html_url: 'https://github.com/Polt0s',
  followers: 1,
};

describe('Header-component text', () => {
  const changeLightTheme = jest.fn();
  const changeDarkTheme = jest.fn();
  const handleLogout = jest.fn();

  it('test for correct data retrieval and check props', async () => {
    render(<Header isAuth={false}
      aboutMeList={aboutMeList}
      handleLogout={handleLogout}
      changeLightTheme={changeLightTheme}
      changeDarkTheme={changeDarkTheme}
    />);

    expect(screen.queryByRole('button', { name: /выйти/i })).toBeNull();

    expect(await screen.findByText(aboutMeList.html_url)).toBeInTheDocument();

    expect(await screen.findByText(aboutMeList.followers)).toBeInTheDocument();

    expect(screen.getByAltText(/avatar_url/i)).toHaveClass('header-main__img');

    const buttonLightTheme = screen.getByRole('button', { name: /Светлая тема/i });
    const buttonDarkTheme = screen.getByRole('button', { name: /тёмная тема/i });

    userEvent.click(buttonLightTheme);
    expect(changeLightTheme).toBeCalledTimes(1);

    userEvent.click(buttonDarkTheme);
    expect(changeDarkTheme).toBeCalledTimes(1);
  });

  it('test to check the button to log out of an authorized user', async () => {
    render(
      <Header
        isAuth={true}
        aboutMeList={aboutMeList}
        handleLogout={handleLogout}
        changeLightTheme={changeLightTheme}
        changeDarkTheme={changeDarkTheme}
      />
    );

    const butttonClose = await screen.findByRole('button', { name: /выйти/i });

    userEvent.click(butttonClose);
    expect(handleLogout).toBeCalledTimes(1);
  });
});