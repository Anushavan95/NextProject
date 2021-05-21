import React, {Component} from 'react';
import User from '../../../../public/icons/user.svg';

export default class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login-block">
        <div className="user-img">
          <div className="logo-user">
            <img src={User} alt="User" />
          </div>
          <h2>Добро пожаловать в TCP Market</h2>
        </div>
        <form className="login-form">
          <button type="button" className="login">
            Войти
          </button>
          <button type="button" className="sign-in">
            Регистрация
          </button>
        </form>
      </div>
    );
  }
}
