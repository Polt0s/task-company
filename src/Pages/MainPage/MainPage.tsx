import React from 'react';
import { CardsContainer, SidebarContainer, CompanyFormContainer } from '../../Containers';
import './Main.scss';

export const MainPage: React.FC = () => {
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
