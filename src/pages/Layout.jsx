// import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';


const Layout = () => {
  return (
    <div >

      <Header />
      <main   >
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.key;
        }} />
    </div>
  );
};

export default Layout;