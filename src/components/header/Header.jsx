import React, { useState } from 'react';
import clas from './header.module.scss';
import Nav from '@components/nav/Nav';
import { IoIosSearch } from 'react-icons/io'
import SearchResult from '@components/searchResult/SearchResult';


const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);


  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setLinkClicked(false);

  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 500);

    // setIsFocused(false);

  };

  const handleLinkClick = () => {
    debugger
    setSearchText('')
    setLinkClicked(true);
    setTimeout(() => {
      setLinkClicked(false);
    }, 500);
  };

  return (
    <header className={clas.header1}>
      <div className={`${clas.header_container} container`}>
        <div className={clas.logo}>OnLine</div>
        <Nav />
        <div className={clas.search_block}>
          <div className={clas.search}>
            <input
              type="text"
              className={clas.search_input}
              value={searchText}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur} />
            <IoIosSearch className={clas.search_logo} ></IoIosSearch>
          </div>

          {isFocused && searchText && !linkClicked && (
            <div className={clas.search_result_block}>
              <SearchResult query={searchText}
                onClick={handleLinkClick}
              />
            </div>
          )}



        </div>
      </div>
    </header>
  );
};

export default Header;