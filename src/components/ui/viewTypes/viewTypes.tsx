import React from 'react';
import './viewTypes.scss';

import { BsListUl } from 'react-icons/bs';
import { FaThLarge } from 'react-icons/fa';

export const ViewTypes = () => {
  return (
    <span className="view-types">
      <span className="view-types__icon view-types__icon--active">
        <BsListUl size={15}/>
      </span>
      <span className="view-types__icon">
        <FaThLarge size={15}/>
      </span>
    </span>
  )
}