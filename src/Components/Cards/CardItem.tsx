import React from 'react';
import './card.sass';
import { ICompany } from '../../Models/ICompany';

const CardItem: React.FC<ICompany> = ({ nameCompany, address, email, phone, id, onClick, selected, ...props }) => {
  return (
    <article className={'card-item'} onClick={() => onClick(id)} {...props}>
      <p className={'card-item__text'}>Название компании: {nameCompany}</p>
      <p className={'card-item__text'}>Адрес: {address}</p>
      <p className={'card-item__text'}>Email: {email}</p>
      <p className={'card-item__text'}>Телефон: {phone}</p>
    </article>
  );
};

export default CardItem;