import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { ICompany } from "../../Models/ICompany";
import Cards from "./Cards";

jest.mock("axios");
const companys: ICompany[] = [
  {
    nameCompany: "Ололошка",
    address: "Москва",
    email: "ololo@bk.ru",
    phone: "+79654587845",
    id: 0,
    selected: false
  },
  {
    nameCompany: "Домофоны",
    address: "санкт-петербург",
    email: "dom@mail.ru",
    phone: "+79115555555",
    id: 1,
    selected: false
  },
];

describe('Cards-component', () => {
  const changeSelectedPost = jest.fn();
  it('test for successful data loading', async () => {
    render(
      <Cards companyList={companys} changeSelectedPost={changeSelectedPost} isLoading={false} />
    );

    const cardItem = await screen.findByTestId(1);
    expect(cardItem).toBeInTheDocument();

    expect(await screen.findByText('Адрес: Москва')).toBeInTheDocument();
    expect(await screen.findByText('Email: ololo@bk.ru')).toBeInTheDocument();
    expect(await screen.findByText('Телефон: +79654587845')).toBeInTheDocument();

    userEvent.click(cardItem);
    expect(changeSelectedPost).toBeCalledTimes(1);

    expect(screen.queryByTestId('loader')).toBeNull();
  });

  it('test for rejected data loading', () => {
    render(
      <Cards companyList={companys} changeSelectedPost={changeSelectedPost} isLoading={true} />
    );

    const cards = screen.queryByTestId('card-block');
    const loader = screen.getByTestId('loader');
    expect(cards).toBeNull();
    expect(loader).toBeInTheDocument();
  });
});

