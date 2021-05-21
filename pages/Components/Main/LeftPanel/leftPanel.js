import React from 'react';
import ListsPanel from './ListsPanel/listsPanel';
import Auction from '../../../../public/icons/auction.png';
import Corz from '../../../../public/icons/cart-corz.png';
import Uslug from '../../../../public/icons/uslug.svg';
import Key from '../../../../public/icons/key.svg';

class LeftPanel extends React.Component {
  state = {
    leftPanel: [
      {listsname: 'Аукцион', logoPanel: Auction},
      {listsname: 'покупки', logoPanel: Corz},
      {listsname: 'услуги', logoPanel: Uslug},
      {listsname: 'недвижимость', logoPanel: Key},
    ],
  };
  render() {
    const {leftPanel} = this.state;
    return (
      <div className="lists-panel-left">
        {leftPanel.map((list) => {
          return <ListsPanel {...list} />;
        })}
      </div>
    );
  }
}

export default LeftPanel;
