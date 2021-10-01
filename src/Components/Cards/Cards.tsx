import React from 'react';
import Loader from '../Loader/Loader';
import CardItem from './CardItem';
import { getCompanyData } from '../../Api/getCompanyData';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { setSelected } from '../../Store/reducer/company';
import './card.sass';

const Cards: React.FC = () => {
  const company = useAppSelector(state => state.company.company);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getCompanyData())
    setIsLoading(false);
  }, []);

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

  const handleDataUser = (id: number) => {
    dispatch(setSelected(id))
  };

  return (
    <>
      {isLoading ? <Loader /> : (
        <div className={'card-block'} onContextMenu={onContextMenu}>
          {company.map((item) => (
            <CardItem key={item.nameCompany}
              nameCompany={item.nameCompany}
              address={item.address}
              id={item.id}
              email={item.email}
              phone={item.phone}
              onClick={handleDataUser}
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