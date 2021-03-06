import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { ICompany } from "../../Types/index";
import { Cards } from "./Cards";

jest.mock("axios");
const company: ICompany[] = [
  {
    nameCompany: "Ололошка",
    address: "Москва",
    email: "ololo@bk.ru",
    phone: "+79654587845",
    id: 0,
  },
  {
    nameCompany: "Домофоны",
    address: "санкт-петербург",
    email: "dom@mail.ru",
    phone: "+79115555555",
    id: 1,
  },
];

describe('Cards', () => {
  const changeSelectedPost = jest.fn();

  it('check for successful data loading', async () => {
    render(
      <Cards companyList={company} changeSelectedPost={changeSelectedPost} isLoading={false} />
    );

    const cardItem = await screen.findByTestId(1);

    expect(cardItem).toBeInTheDocument();

    act(() => {
      userEvent.click(cardItem);
    });

    expect(changeSelectedPost).toBeCalledTimes(1);

    const loader = screen.queryByTestId('loader');

    expect(loader).toBeNull();

  });

  it('check for rejected data loading', () => {
    render(
      <Cards companyList={company} changeSelectedPost={changeSelectedPost} isLoading={true} />
    );

    const cards = screen.queryByTestId('card-block');
    const loader = screen.queryByTestId('loader');

    expect(loader).toBeInTheDocument();
    expect(cards).toBeNull();
  });
});

