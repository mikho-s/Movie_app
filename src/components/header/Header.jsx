import React from 'react';
import clas from './header.module.scss';
import Nav from '../nav/Nav';
import { IoIosSearch } from 'react-icons/io'

const Header = () => {
  return (
    <header className={clas.header1}>
      <div className={`${clas.header_container} container`}>
        <div className={clas.logo}>OnLine</div>
        <Nav />
        <div className={clas.search_block}>
          <input type="text" className={clas.input} />
          <IoIosSearch className={clas.search_logo} ></IoIosSearch>
        </div>
      </div>
    </header>
  );
};

export default Header;