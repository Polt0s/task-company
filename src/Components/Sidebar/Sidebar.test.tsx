import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Sidebar } from './Sidebar';
import userEvent from "@testing-library/user-event";

describe('Sidebar', () => {

  it("check for checking the rendering of elements and event calls", () => {
    const onClick = jest.fn();
    const handleRouter = jest.fn();

    render(<Sidebar onClick={onClick} handleRouter={handleRouter} />);

    const navbar = screen.getByTestId("sidebar-main");
    const link = screen.getByTestId("sidebar-main__text");
    const buttonList = screen.getByRole('button', { name: /Отобразить список компаний/i });
    const linkAboutUs = screen.getByRole('heading', { name: /О нас/i });

    expect(navbar.innerHTML).toMatch(/О компании/i);

    expect(navbar.innerHTML).toMatch(/О нас/i);

    expect(navbar).toContainElement(link);

    act(() => {
      userEvent.click(buttonList);
      expect(onClick).toBeCalledTimes(1);
    });

    act(() => {
      userEvent.click(linkAboutUs);
    });

    expect(handleRouter).toBeCalledTimes(1);
  });
});