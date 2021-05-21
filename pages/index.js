import {Fragment} from 'react';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';

import Main from './Components/Main/main';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}
