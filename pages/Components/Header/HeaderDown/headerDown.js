import React from 'react';
import Searchpanel from './searchpanel';
import Catalog from '../../../../public/icons/catalog.svg';
import Save from '../../../../public/icons/save.svg';
import Check from '../../../../public/icons/check.svg';
import ShopCart from '../../../../public/icons/shop-carts.svg';

class HeaderDown extends React.Component {
  state = {};
  render() {
    return (
      <div className="header-down">
        <div className="left">
          <div className="burger-menu">
            <div className="dir-burg"></div>
          </div>
          <div className="catalog">
            <img src={Catalog} />
            <h2>Каталог</h2>
          </div>
        </div>
        <Searchpanel />
        <div className="img-panel">
          <img src={Save} alt={'Save'} />
          <img src={Check} alt={'Check'} />
          <img src={ShopCart} alt={'ShopCart'} />
        </div>
      </div>
    );
  }
}

export default HeaderDown;
