import React from 'react';
import cls from './nav.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const menuItem = [
    { name: "Home", link: '/' },
    { name: "Movies", link: '/movies' },
    // { name: "About", link: '/about' },
    // { name: "Login", link: '/login' },
    { name: "TVs", link: 'tvs' },
    // { name: "Popular", link: 'popular' },
    // { name: "Top Rated", link: 'top-rated' },
    // { name: "My List", link: 'my-list' },
  ]


  return (
    <nav className={cls.menu}>
      <ul className={cls.body}>
        {menuItem.map(el =>
          <NavLink to={el.link} key={el.link} className={cls.item}>{el.name}</NavLink>)}
      </ul>
    </nav>
  );
};

export default Nav;