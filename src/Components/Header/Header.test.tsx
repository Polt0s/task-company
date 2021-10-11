import React from "react";
import { render, screen, act } from "@testing-library/react";
import Header from "./Header";
import { IAboutMe } from "../../Types/index";
import userEvent from "@testing-library/user-event";

const aboutMeList: IAboutMe = {
  avatar_url: '',
  html_url: 'https://github.com/Polt0s',
  followers: 1,
};

describe('Header', () => {
  const changeLightTheme = jest.fn();
  const changeDarkTheme = jest.fn();
  const handleLogout = jest.fn();

  it('check for correct data retrieval and check props', async () => {
    render(<Header isAuth={false}
      aboutMeList={aboutMeList}
      handleLogout={handleLogout}
      changeLightTheme={changeLightTheme}
      changeDarkTheme={changeDarkTheme}
    />);

    expect(screen.queryByRole('button', { name: /выйти/i })).toBeNull();

    expect(await screen.findByText(aboutMeList.html_url)).toBeInTheDocument();

    expect(await screen.findByText(aboutMeList.followers)).toBeInTheDocument();

    const buttonLightTheme = screen.getByRole('button', { name: /Светлая тема/i });
    const buttonDarkTheme = screen.getByRole('button', { name: /тёмная тема/i });

    act(() => {
      userEvent.click(buttonLightTheme);
    });

    expect(changeLightTheme).toBeCalledTimes(1);

    act(() => {
      userEvent.click(buttonDarkTheme);
    });

    expect(changeDarkTheme).toBeCalledTimes(1);
  });

  it('check the exit button', async () => {
    render(
      <Header
        isAuth={true}
        aboutMeList={aboutMeList}
        handleLogout={handleLogout}
        changeLightTheme={changeLightTheme}
        changeDarkTheme={changeDarkTheme}
      />
    );

    const buttonClose = await screen.findByRole('button', { name: /выйти/i });

    act(() => {
      userEvent.click(buttonClose);
    });

    expect(handleLogout).toBeCalledTimes(1);
  });
});