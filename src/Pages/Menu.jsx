import React from 'react';
import Cards from './../components/Cards';

import'./Menu.css';

function Menu() {
  return (
    <div className='menu__wrapper'>
      <h1 className='menu__title'>Our Menu</h1>
      <Cards />
    </div>
  )
}

export default Menu