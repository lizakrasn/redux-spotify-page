import React from 'react';
import SongModel, { PopularityType } from '../../../../../../../../../../../data/songModel';
import './song.scss';

import { BsGraphDown } from 'react-icons/bs';
import { BsGraphUp } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { ImCheckmark } from 'react-icons/im';

interface SongProps {
  song: SongModel;
  index: number;
}

const popularity = (value?: PopularityType) => {
  if (value === "up") {
    return <BsGraphUp size={20}/>
  } else if (value === "down") {
    return <BsGraphDown size={20}/>
  } else {
    return <></>
  }
}

export const Song = ({song, index}: SongProps) => {
  const minutes = Math.floor(song.durationSeconds / 60)
  const seconds = (song.durationSeconds % 60).toString().padStart(2, "0")

  const addCoartist = (coartist: string) => {
    if (coartist.length === 0) {
      return ""
    } else {
      return ` - ${coartist}`
    }
  }

  return (
    <div className="song">
      <p className="song__number">{index + 1}</p>
      <button className="song__added">
        {song.isAdded ? <ImCheckmark/> : <GoPlus/>}
      </button>
      <p className="song__name">
        {song.name}
        <span className="song__coartists">{addCoartist(song.coartists)}</span>
      </p>
      <p className="song__explicit">explicit</p>
      <p className="song__duration">{`${minutes} : ${seconds}`}</p>
      <div className="song__popularity">
        {popularity(song.popularity)}
      </div>
    </div>
  )
}