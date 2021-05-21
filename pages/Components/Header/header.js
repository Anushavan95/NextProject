import React from 'react';
import Nav from './Nav/nav';
import Logo from '../Main/Card/Image.example';
import BItValue from '../../../public/icons/valueBit.svg';
import SlackDown from '../../../public/icons/slackDown.png';
import HeaderDown from './HeaderDown/headerDown';

class Header extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <section className="first-header">
          {' '}
          <div className="header-section">
            <div className="logo-page">
              <Logo />
            </div>
            <div className="header-navs-menu">
              <div className="bit-credit">
                <div className="bit-blocks">
                  <div className="bit-logo">
                    {' '}
                    <img src={BItValue} />
                  </div>
                  <div className="bit-text">
                    <small>TCP Credit</small>{' '}
                    <small className="small-price">0.00001</small>
                  </div>
                  <img src={SlackDown} />
                </div>
                <div className="bit-blocks">
                  <div className="bit-logo">
                    {' '}
                    <img src={BItValue} />
                  </div>
                  <div className="bit-text">
                    <small>TCP Credit</small>{' '}
                    <small className="small-price">0.00001</small>
                  </div>
                  <img src={SlackDown} />
                </div>
                <div className="bit-blocks">
                  <div className="bit-logo">
                    {' '}
                    <img src={BItValue} />
                  </div>
                  <div className="bit-text">
                    <small>TCP Credit</small>{' '}
                    <small className="small-price">0.00001</small>
                  </div>
                  <img src={SlackDown} />
                </div>
              </div>

              <Nav />
            </div>
          </div>
        </section>

        <HeaderDown />
      </header>
    );
  }
}

export default Header;
