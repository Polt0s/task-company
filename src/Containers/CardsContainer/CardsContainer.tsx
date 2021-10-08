import React from 'react';
import { ApiCompany } from '../../Api/ApiCompany';
import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import { useFetching } from '../../Hooks/useFetching';
import { ICompany } from '../../Types/index';
import { addCompany, setSelected } from '../../Store/reducer/company';
import Cards from "../../Components/Cards/Cards"

const CardsContainer: React.FC = React.memo(() => {
  const company = useAppSelector(state => state.company.company);
  const dispatch = useAppDispatch();
  const [fetchCards, isLoading] = useFetching(async () => {
    const response: ICompany[] = await ApiCompany.getCompanyData();
    dispatch(addCompany(response));
  });

  React.useEffect(() => {
    fetchCards();
  }, []);

  const changeSelectedPost = (id: number | undefined) => {
    dispatch(setSelected(id))
  };

  return (
    <Cards companyList={company} changeSelectedPost={changeSelectedPost} isLoading={isLoading} />
  );
});

export default CardsContainer;
