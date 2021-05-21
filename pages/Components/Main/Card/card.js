import React from 'react';
import Save from '../../../../public/icons/save.svg';
import Check from '../../../../public/icons/check.svg';
import BtnLot from '../../../../public/icons/btn-lot.svg';

class Card extends React.Component {
  state = {};

  render() {
    const {btnLot, imgCard, priceCard, textCard, btnAddCardImg, creditCard} =
      this.props;
    return (
      <div className="card">
        <div className="buttons-card">
          <button className="lot-btn">
            <img src={BtnLot} /> {btnLot}
          </button>
          <img src={Save} alt={'Save'} />
          <img src={Check} alt={'Check'} />
        </div>
        <div className="img-block">
          <img className="img-card" src={imgCard} alt="imgCard" />
          <div className="text-card">
            <p className="text-card">{textCard} </p>
            <strong className="price">{priceCard}</strong>
            <strong className="credit">{creditCard}</strong>
          </div>
          <button className="add-corz">
            <img src={btnAddCardImg} />В корзину
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
