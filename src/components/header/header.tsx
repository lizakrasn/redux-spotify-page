import React, { useState } from 'react';
import "./header.scss"
import {Search} from "./components/search/search"
import {User} from "./components/user/user"
import { Flows } from '../ui/flows/flows';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeInput = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className="header">
      <div className="header__search-block">
        <div className="header__flows">
          <Flows />
        </div>
        <div className="header__search">
          <Search
            value={searchValue}
            onChange={onChangeInput}
          />
        </div>
      </div>

      <User />
    </div>
  )
}