import React from 'react';
import './main.scss'

import { Artist } from './components/artist/artist';
import { Menu } from './components/menu/menu';


export const Main = () => {

  return (
    <div className="content">
      <div className="content__menu">
        <Menu />
      </div>

      <div className="content__artist">
        {/* <Artist /> */}
      </div>
    </div>
  )
}