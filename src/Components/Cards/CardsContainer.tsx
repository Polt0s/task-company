import React from 'react';
import { getCompanyData } from '../../Api/getCompanyData';
import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import { setSelected } from '../../Store/reducer/company';
import Cards from "./Cards"

const CardsContainer: React.FC = () => {
  const company = useAppSelector(state => state.company.company);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getCompanyData())
    setIsLoading(false);
  }, []);

  const changeSelectedPost = (id: number) => {
    dispatch(setSelected(id))
  };

  return (
    <Cards companyList={company} changeSelectedPost={changeSelectedPost} isLoading={isLoading} />
  );
};

export default CardsContainer;
