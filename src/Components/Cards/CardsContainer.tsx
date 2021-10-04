import React from 'react';
import { getCompanyData } from '../../Api/getCompanyData';
import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import { useFetching } from '../../Hooks/useFetching';
import { ICompany } from '../../Models/ICompany';
import { addCompany, setSelected } from '../../Store/reducer/company';
import Cards from "./Cards"

const CardsContainer: React.FC = () => {
  const company = useAppSelector(state => state.company.company);
  const dispatch = useAppDispatch();
  const [fetchCards, isLoading] = useFetching(async () => {
    const response: ICompany[] = await getCompanyData();
    dispatch(addCompany(response));
  });

  React.useEffect(() => {
    fetchCards();
  }, []);

  const changeSelectedPost = (id: number) => {
    dispatch(setSelected(id))
  };

  return (
    <Cards companyList={company} changeSelectedPost={changeSelectedPost} isLoading={isLoading} />
  );
};

export default CardsContainer;
