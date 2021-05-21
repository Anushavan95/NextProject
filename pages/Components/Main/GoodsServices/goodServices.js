import React from 'react';

import Static from '../../../../public/icons/static.svg';
class GoodServices extends React.Component {
  state = {};
  render() {
    return (
      <section>
        <h2>Товары и услуги</h2>
        <div className="static-goods">
          <div className="static"></div>
          <div className="static"></div>
          <div className="static"></div>
          <div className="static"></div>
          <div className="static"></div>
          <div className="static"></div>
          <div className="static"></div>
        </div>
        <button className="static-btn">Разместить</button>
      </section>
    );
  }
}

export default GoodServices;
