import React from 'react';
import { CardsContainer, SidebarContainer, CompanyFormContainer } from '../../Containers';
import cl from './Main.module.scss';

export const MainPage: React.FC = () => {
  return (
    <main className={cl.gridMain}>
      <section className={cl.gridMain__content}>
        <CardsContainer />
      </section>
      <section className={cl.gridMain__menu}>
        <SidebarContainer />
      </section>
      <section className={cl.gridMain__form}>
        <CompanyFormContainer />
      </section>
    </main>
  );
};
