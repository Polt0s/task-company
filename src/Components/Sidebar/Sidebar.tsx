import React from 'react';
import { useHistory } from 'react-router';
import useAppSelector from '../../Hooks/useAppSelector';
import { RouteNames } from '../../Router';
import { removeDuplicate } from '../../utils/RemoveDuplicate';
import Btn from '../Button/Btn';
import './sidebar.sass';

const Sidebar: React.FC = () => {
  const router = useHistory();
  const { company } = useAppSelector((state) => state.company);
  const result: Array<string> = [];

  const onClick = () => {
    company.map((item) => item.selected ? result.push(item.nameCompany) : null);
    console.log(removeDuplicate(result));
  };

  return (
    <nav className={'sidebar-main'}>
      <h2 className={'sidebar-main__text'} onClick={() => router.push(RouteNames.ABOUT)}>О нас</h2>
      <h2 className={'sidebar-main__text'}>О компании</h2>
      <Btn onClick={onClick}>Отобразить список компаний</Btn>
    </nav>
  );
};

export default Sidebar;