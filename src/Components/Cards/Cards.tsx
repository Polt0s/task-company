import React from 'react';
import { Loader } from '../Loader';
import { CardItem } from '../CardItem';
import cl from './Card.module.scss';
import { ICompany } from '../../Types/index';

interface ICardsProps {
  companyList: ICompany[];
  changeSelectedPost: (event: number | undefined) => void;
  isLoading: boolean;
};

export const Cards: React.FC<ICardsProps> = ({ companyList, changeSelectedPost, isLoading }) => {

  const onContextMenu = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    alert('Меню для списка компаний');
  }, []);

  const onContextMenuItem = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    alert('Меню для карточки');
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : (
        <div id="card-block" className={cl.cardBlock} onContextMenu={onContextMenu}>
          {companyList.map((item) => (
            <CardItem key={item.id}
              company={item}
              onClick={changeSelectedPost}
              onContextMenu={onContextMenuItem}
            />
          ))}
        </div>
      )}
    </>
  );
};

