import React from 'react';
import Loader from '../Loader/Loader';
import CardItem from './CardItem';
import './card.sass';
import { ICompany } from '../../Models/ICompany';

interface ICardsProps {
  companyList: ICompany[];
  changeSelectedPost: (event: number) => void;
  isLoading: boolean;
};

const Cards: React.FC<ICardsProps> = ({ companyList, changeSelectedPost, isLoading }) => {
  const changeAlertCard = () => alert('Меню для списка компаний');
  const changeAlertCardItem = () => alert('Меню для карточки');

  const onContextMenu = (event: React.MouseEvent) => {
    const node = event.target;
    node.addEventListener('onContextMenu', changeAlertCard());
  };

  const onContextMenuItem = (event: React.MouseEvent) => {
    event.stopPropagation();
    const node = event.target;
    node.addEventListener('onContextMenu', changeAlertCardItem());
  };

  return (
    <>
      {isLoading ? <Loader /> : (
        <div id="card-block" className={'card-block'} onContextMenu={onContextMenu}>
          {companyList.map((item) => (
            <CardItem key={item.nameCompany}
              nameCompany={item.nameCompany}
              address={item.address}
              id={item.id}
              email={item.email}
              phone={item.phone}
              onClick={changeSelectedPost}
              onContextMenu={onContextMenuItem}
              style={item.selected ? { background: 'lightblue' } : {}}
              selected={item.selected}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;