import axios from 'axios';
import React from 'react';
import Loader from '../Loader/Loader';
import CardItem from './CardItem';
import { getCompanyData } from '../../Api/getCompanyData';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { useFetching } from '../../Hooks/useFetching';
import { ICompany } from '../../Models/ICompany';
import useAppSelector from '../../Hooks/useAppSelector';
import { addCompany } from '../../Store/reducer/company';
import './card.sass';

const Cards: React.FC = () => {
  const company = useAppSelector(state => state.company.company);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useAppDispatch();
  // const [fetchCompany, isLoading] = useFetching(async () => {
  //   dispatch(getCompanyData())
  // })
  React.useEffect(() => {
    // setIsLoading(true);
    dispatch(getCompanyData())
    setIsLoading(false);
  }, [])

  return (
    <>
      {isLoading ? <Loader /> : (
        <div className={'card-block'}>
          {company.map((item) => (
            <CardItem key={item.nameCompany}
              nameCompany={item.nameCompany}
              address={item.address}
              email={item.email}
              phone={item.phone}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;