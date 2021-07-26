import React from 'react';
import SongModel from '../../../../../../../../../../../data/songModel';
import './track.scss';

import { GoPlus } from 'react-icons/go';
import { ImCheckmark } from 'react-icons/im';

interface TrackProps {
  song: SongModel;
  index: number;
}

export const Track = ({song, index}: TrackProps) => {
  return (
    <div className="track">
      <img
        className="track__art"
        alt="artist"
        src={song.imgUrl}
      />
      <p className="track__number">{index + 1}</p>
      <button className="track__added">
        {song.isAdded ? <ImCheckmark/> : <GoPlus/>}
      </button>
      <p className="track__name">{song.name}</p>
      <p className="track__explicit">explicit</p>
      <p className="track__listens">{new Intl.NumberFormat().format(song.listens)}</p>
    </div>
  )
}