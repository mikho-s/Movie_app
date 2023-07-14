import React from 'react';
import clas from './footer.module.scss';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';


const Footer = () => {
  return (
    <footer className={`container ${clas.footer_main}`}>
      <div className={clas.footer_item}>2023</div>
      <Nav />
    </footer>
  );
};

export default Footer;