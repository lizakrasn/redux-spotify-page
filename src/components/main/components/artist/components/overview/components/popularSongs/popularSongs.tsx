import React from 'react';
import './popularSongs.scss';
import SongModel from '../../../../../../../../../data/songModel';
import { Track } from './components/track/track';
import { Button } from '../../../../../../../ui/button/button';

interface PopularSongsProps {
  songs: SongModel[];
}

export const PopularSongs = ({songs}: PopularSongsProps) => {
  return(
    <div className="tracks">
      <div className="tracks__list">
        {songs.map((song, index) => {
          return (
            <div key={song.id} className="tracks__track">
              <Track song={song} index={index} />
            </div>
          )
        })}
      </div>
      
      <div className="tracks__button">
        <Button type="basic" text="Show 5 more"/>
      </div>
    </div>
  )
}