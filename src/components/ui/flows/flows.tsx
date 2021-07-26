import React from 'react';
import './flows.scss';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward} from 'react-icons/io';

export const Flows = () => {
  return (
    <div className="flows">
      <span className="flows__item flows__item--is-active">
        <IoIosArrowBack size={27} />
      </span>
      <span className="flows__item">
        <IoIosArrowForward size={27} />
      </span>
    </div>
  )
}