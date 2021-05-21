import React from 'react';
import Static from '../../../../public/icons/Shape.svg';

class UserIncome extends React.Component {
  state = {};
  render() {
    return (
      <section>
        <h2>Доход пользователей</h2>
        <div className="static-income">
          <img src={Static} alt={'Static'} />
        </div>
        <button className="static-btn">Стать участником</button>
      </section>
    );
  }
}

export default UserIncome;
