import React from 'react';
import './artistInfo.scss';

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { Button } from '../../../../../../../ui/button/button';
import ArtistModel from '../../../../../../../../../data/artist';
import { Listeners } from './listeners/listeners';

interface ArtistInfo {
  artist: ArtistModel;
}

export const ArtistInfo = ({artist}: ArtistInfo) => {
  return (
    <div className='artist-info'>
      <div className="artist-info__image-container">
        <img
            className="artist-info__image"
            alt="artist"
            src={artist.imgUrl}
        />
      </div>

      <div className="artist-info__block">
        <div className="artist-info__details">
          <p className="artist-info__title">Artist</p>
          <p className="artist-info__name">{artist.name}</p>
        </div>
        <div className="artist-info__actions">
          <Button type="primary" className="artist-info__button">
            <p className="button__text"> <BsFillPlayFill size={20}/> Play</p>
          </Button>
          <Button text='Follow' type="basic" className="artist-info__button"/>
          <Button type="circle" className="artist-info__button">
            <p><BiDotsHorizontalRounded size={15}/></p>
          </Button>
        </div>
      </div>

      <Listeners count={artist.listeners}/>
    </div>
  )
}