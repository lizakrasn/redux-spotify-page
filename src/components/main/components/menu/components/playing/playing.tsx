import react, {useState} from 'react';
import './playing.scss';
import SongModel from '../../../../../../../data/song';

import { GiCheckMark } from 'react-icons/gi';

interface PlayingProps {
  song: SongModel;
}

export const Playing = ({song}: PlayingProps) => {
  return (
    <div className="playing">
      <img
        src={song.image}
        alt="artist"
        className="playing__image"
      ></img>
      <div className="playing__info">
        <a href="#" className="playing__text">{song.name}</a>
        <a href="#" className="playing__text">{song.artist}</a>
      </div>
      <div className="playing__mark">
        <GiCheckMark size={15}/>
      </div>
    </div>
  )
}