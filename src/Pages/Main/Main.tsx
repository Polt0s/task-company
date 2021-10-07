import React from 'react';
import CardsContainer from '../../Containers/CardsContainer/CardsContainer';
import CompanyFormContainer from '../../Containers/CompanyFormContainer/CompanyFormContainer';
import SidebarContainer from '../../Containers/SidebarContainer/SidebarContainer';
import './main.scss';

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