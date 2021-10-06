import React from 'react';
import './card.sass';
import { ICompany } from '../../Models/ICompany';

interface ICardItemProps {
  company: ICompany;
  onClick: (event: number | undefined) => void;
  selected: boolean | undefined;
  onContextMenu?: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
};

const CardItem: React.FC<ICardItemProps> = ({ company, onClick, selected, ...props }) => {
  return (
    <article data-testid={company.id} className={'card-item'} onClick={() => onClick(company.id)} {...props}>
      <p className={'card-item__text'}>Название компании: {company.nameCompany}</p>
      <p className={'card-item__text'}>Адрес: {company.address}</p>
      <p className={'card-item__text'}>Email: {company.email}</p>
      <p className={'card-item__text'}>Телефон: {company.phone}</p>
    </article>
  );
};

export default CardItem;