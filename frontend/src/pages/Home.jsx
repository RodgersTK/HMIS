import React from 'react';
import Menu from '../components/Menu';

import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <Home />
      {/* <Footer/> */}
    </div>
  );
}

export default Home;