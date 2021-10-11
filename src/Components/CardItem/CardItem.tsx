import React from 'react';
import cl from './CardItem.module.scss';
import { ICompany } from '../../Types/index';

interface ICardItemProps {
  company: ICompany;
  onClick: (event: number | undefined) => void;
  onContextMenu?: (event: React.MouseEvent) => void;
};

const CardItem: React.FC<ICardItemProps> = ({ company, onClick }) => {
  return (
    <article data-testid={company.id}
      className={cl.cardItem}
      onClick={() => onClick(company.id)}
      style={company.selected ? { background: 'lightblue' } : {}}
    >
      <p className={'card-item__text'}>Название компании: {company.nameCompany}</p>
      <p className={'card-item__text'}>Адрес: {company.address}</p>
      <p className={'card-item__text'}>Email: {company.email}</p>
      <p className={'card-item__text'}>Телефон: {company.phone}</p>
    </article>
  );
};

export default CardItem;