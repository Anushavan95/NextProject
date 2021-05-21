import React from 'react';
import MicroPhone from '../../../../public/icons/microphone.svg';
import Search from '../../../../public/icons/search.svg';

export default function Searchpanel() {
  return (
    <div className="search-panel">
      <input type="text" placeholder="Поиск..." className="searchInput" />
      <img src={Search} alt={'Search'} className="img-search left-img" />
      <img
        src={MicroPhone}
        alt={'MicroPhone'}
        className="img-search right-img"
      />
    </div>
  );
}
