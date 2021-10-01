import React from 'react';
import { useHistory } from 'react-router-dom';
import useAppSelector from '../../Hooks/useAppSelector';
import { RouteNames } from '../../Router';
import { removeDuplicate } from '../../utils/RemoveDuplicate';
import Sidebar from './Sidebar';

const SidebarContainer: React.FC = () => {
  const router = useHistory();
  const { company } = useAppSelector((state) => state.company);
  const result: Array<string> = [];

  const onClick = () => {
    company.map((item) => item.selected ? result.push(item.nameCompany) : null);
    console.log(removeDuplicate(result));
  };

  const handleRouter = () => {
    router.push(RouteNames.ABOUT);
  };

  return (
    <Sidebar onClick={onClick} handleRouter={handleRouter} />
  );
};

export default SidebarContainer;