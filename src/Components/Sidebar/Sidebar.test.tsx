import React from "react";
import { render, screen, act } from "@testing-library/react";
import Sidebar from './Sidebar';
import userEvent from "@testing-library/user-event";

describe('Sidebar-component', () => {

  it("test for checking the rendering of elements and event calls", () => {
    const onClick = jest.fn();
    const handleRouter = jest.fn();

    const { container, getByTestId } = render(<Sidebar onClick={onClick} handleRouter={handleRouter} />);

    const navbar = getByTestId("sidebar-main");
    const link = getByTestId("sidebar-main__text");
    const buttonList = screen.getByRole('button', { name: /Отобразить список компаний/i });
    const linkAboutUs = screen.getByRole('heading', { name: /О нас/i });

    expect(container.innerHTML).toMatch(/О компании/i);

    expect(container.innerHTML).toMatch(/О нас/i);

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