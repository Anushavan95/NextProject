import React from 'react';
import Arcat from '../../../../public/icons/arcat.svg';

class CenterSection extends React.Component {
  state = {};
  render() {
    return (
      <div className="big-center-section">
        <section className="center-section">
          <div className="center-title">
            <h2>НОВЫЕ ТОВАРЫ</h2>
            <h2>Ювелирные украшения</h2>
            <p>
              Чистое серебро, золото 585 пробы, <br></br> а также бижутерия
            </p>
            <a href="#">
              <button className="go-catalog">Перейти в каталог</button>
            </a>
          </div>
          <div className="img-center">
            <img src={Arcat} alt={'Arcat'} />
          </div>
        </section>
        <div className="slide-img">
          <div>
            <img src={Arcat} />{' '}
          </div>
          <div>
            <img src={Arcat} />{' '}
          </div>
          <div>
            <img src={Arcat} />{' '}
          </div>
          <div>
            <img src={Arcat} />{' '}
          </div>
          <div>
            <img src={Arcat} />{' '}
          </div>
          <div>
            <img src={Arcat} />{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default CenterSection;
