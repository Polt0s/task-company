import React from 'react';
import './card.scss';
import { ICompany } from '../../Models/ICompany';
import { parityCheck } from '../../utils/ParityCheck';

interface ICardItemProps {
  company: ICompany;
  onClick: (event: number | undefined) => void;
  selected: boolean | undefined;
  onContextMenu?: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
};

const CardItem: React.FC<ICardItemProps> = ({ company, onClick, selected, ...props }) => {
  return (
    <article data-testid={company.id}
      className={`card-item ${parityCheck(company.id) ? 'card-item__background' : ''}`}
      onClick={() => onClick(company.id)} {...props}
      style={selected ? { background: 'lightblue' } : {}}
    >
      <p className={'card-item__text'}>Название компании: {company.nameCompany}</p>
      <p className={'card-item__text'}>Адрес: {company.address}</p>
      <p className={'card-item__text'}>Email: {company.email}</p>
      <p className={'card-item__text'}>Телефон: {company.phone}</p>
    </article>
  );
};

export default CardItem;