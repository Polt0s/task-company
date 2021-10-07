import React from 'react';
import Loader from '../Loader/Loader';
import CardItem from './CardItem';
import './card.scss';
import { ICompany } from '../../Models/ICompany';

interface ICardsProps {
  companyList: ICompany[];
  changeSelectedPost: (event: number | undefined) => void;
  isLoading: boolean;
};

const Cards: React.FC<ICardsProps> = ({ companyList, changeSelectedPost, isLoading }) => {
  const changeAlertCard = () => alert('Меню для списка компаний');
  const changeAlertCardItem = () => alert('Меню для карточки');

  const onContextMenu = (event: React.MouseEvent) => {
    const node = event.target;
    node.addEventListener('contextmenu', changeAlertCard());
  };

  const onContextMenuItem = (event: React.MouseEvent) => {
    event.stopPropagation();
    const node = event.target;
    node.addEventListener('contextmenu', changeAlertCardItem());
  };

  return (
    <>
      {isLoading ? <Loader /> : (
        <div id="card-block" className={'card-block'} onContextMenu={onContextMenu}>
          {companyList.map((item) => (
            <CardItem key={item.id}
              company={item}
              onClick={changeSelectedPost}
              onContextMenu={onContextMenuItem}
              selected={item.selected}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;