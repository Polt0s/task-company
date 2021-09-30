import React from 'react';
import Cards from '../Components/Cards/Cards';
import CompanyForm from '../Components/Form/CompanyForm';
import Sidebar from '../Components/Sidebar/Sidebar';

const Main: React.FC = () => {
  return (
    <main className={'grid-main'}>
      <section className={'grid-main__content'}>
        <Cards />
      </section>
      <section className={'grid-main__menu'}>
        <Sidebar />
      </section>
      <section className={'grid-main__form'}>
        <CompanyForm />
      </section>
    </main>
  );
};

export default Main;