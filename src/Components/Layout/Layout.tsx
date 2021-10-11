import React from 'react';
import cl from './Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
  return (
    <section className={cl.layout}>
      {children}
    </section>
  );
};
