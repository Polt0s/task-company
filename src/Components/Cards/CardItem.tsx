import React from 'react';
import './card.sass';
import { ICompany } from '../../Models/ICompany';

const CardItem: React.FC<ICompany> = ({ nameCompany, address, email, phone }) => {
  return (
    <article className={'card-item'}>
      <p className={'card-item__text'}>Название компании: {nameCompany}</p>
      <p className={'card-item__text'}>Адрес: {address}</p>
      <p className={'card-item__text'}>Email: {email}</p>
      <p className={'card-item__text'}>Телефон: {phone}</p>
    </article>
  );
};

export default CardItem;