import React from 'react';
import { useHistory } from 'react-router-dom';
import useAppSelector from '../../Hooks/useAppSelector';
import { RouteNames } from '../../Router';
import { removeDuplicateElements } from '../../utils/removeDuplicateElements';
import Sidebar from '../../Components/Sidebar/Sidebar';

const SidebarContainer: React.FC = () => {
  const router = useHistory();
  const { company } = useAppSelector((state) => state.company);
  const result: Array<string> = [];

  React.useEffect(() => {
    company.map((item) => item.selected ? result.push(item.nameCompany) : null)
  });

  const onClick = () => {
    console.log(removeDuplicateElements(result));
  };

  const handleRouter = () => {
    router.push(RouteNames.ABOUT);
  };

  return (
    <Sidebar onClick={onClick} handleRouter={handleRouter} />
  );
};

export default SidebarContainer;