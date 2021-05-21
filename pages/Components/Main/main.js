import React from 'react';
import Login from './Login/login';
import Card from '../Main/Card/card';
import Glasses from '../../../public/icons/glasses.svg';
import Corz from '../../../public/icons/corz.svg';
import LeftPanel from './LeftPanel/leftPanel';
import CenterSection from './CenterSection/centerSection';
import UserIncome from './UserIncome/userIncome';
import GoodServices from './GoodsServices/goodServices';

class Main extends React.Component {
  state = {
    card: [
      {
        btnLot: 'Аукционный лот',
        imgCard: Glasses,
        textCard: 'Название товара может быть и в две строки',
        priceCard: 'USD 320,00',
        creditCard: 'TCP Credit 24,00000000',
        btnAddCardImg: Corz,
      },
    ],
  };
  render() {
    const {card} = this.state;
    let newCard = [];
    for (let i = 0; i <= 11; i++) {
      newCard.push(...card);
    }
    console.log(newCard);

    return (
      <main>
        <section className="grid-section">
          <LeftPanel />
          <CenterSection />
          <Login />
        </section>
        <div className="static-sections">
          <div className="static-sections-list">
            <UserIncome />
            <GoodServices />
            <UserIncome />
          </div>
        </div>
        <div className="cards-items-list">
          <h2>Популярные товары и услуги</h2>
          <section className="cards-section">
            {newCard.map((cards) => {
              return <Card {...cards} />;
            })}
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
