import React from 'react';
import "./user.scss";

import { toggleSettings } from '../../../../features/header/headerSlice';
import { useDispatch, useSelector } from 'react-redux';

import { FaBell } from 'react-icons/fa';
import { FaInbox } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.header.user);
  const isOpen = useSelector(state => state.header.toggleSettings);

  const handleToggleSerrings = () => {
    dispatch(toggleSettings());
  }

  return (
    <div className="user">
      <div className="user__notifications">
        <FaBell size={17}/>
      </div>
      <div className="user__inbox">
        <FaInbox size={17}/>
      </div>
      <div className="user__info">
        <img
          src={user.image}
          alt="user"
          className="user__photo"
        />
        <p className="user__name">{`${user.name} ${user.surname}`}</p>
      </div>
      <div className="user__actions">
        <button
          className="user__button"
          type="button"
          onClick={handleToggleSerrings}
        >
          <IoIosArrowDown size={25}/>
        </button>
        {
          isOpen && (
            <ul className="user__actions-list">
              <li className="user__action">
                <a className="user__action-item" href="#">Private session</a>
              </li>
              <li className="user__action">
                <a className="user__action-item" href="#">Account</a>
              </li>
              <li className="user__action">
                <a className="user__action-item" href="#">Settings</a>
              </li>
              <li className="user__action">
                <a className="user__action-item" href="#">Log Out</a>
              </li>
            </ul>
          )
        }
      </div>
    </div>
  )
}