import React from "react";
import { render, screen, act } from "@testing-library/react";
import { ICompany } from "../../Types";
import CardItem from "./CardItem";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const company: ICompany = {
  nameCompany: "Домофоны",
  address: "санкт-петербург",
  email: "dom@mail.ru",
  phone: "+79115555555",
  id: 0,
};

describe('CardsItem', () => {
  const changeSelectedPost = jest.fn();
  const onClick = jest.fn();

  it('check card details', async () => {

    render(<CardItem company={company} onClick={onClick} />);

    const cardItem = await screen.findByTestId(0);

    expect(cardItem).toBeInTheDocument();

    expect(await screen.findByText('Название компании: Домофоны')).toBeInTheDocument();

    expect(await screen.findByText('Адрес: санкт-петербург')).toBeInTheDocument();

    expect(await screen.findByText('Email: dom@mail.ru')).toBeInTheDocument();

    expect(await screen.findByText('Телефон: +79115555555')).toBeInTheDocument();

    act(() => {
      userEvent.click(cardItem);
    });

    expect(onClick).toBeCalledTimes(1);

  });
});