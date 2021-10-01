import React from 'react';
import CardsContainer from '../Components/Cards/CardsContainer';
import CompanyFormContainer from '../Components/Form/CompanyFormContainer';
import SidebarContainer from '../Components/Sidebar/SidebarContainer';

const Main: React.FC = () => {
  return (
    <main className={'grid-main'}>
      <section className={'grid-main__content'}>
        <CardsContainer />
      </section>
      <section className={'grid-main__menu'}>
        <SidebarContainer />
      </section>
      <section className={'grid-main__form'}>
        <CompanyFormContainer />
      </section>
    </main>
  );
};

export default Main;