import React from 'react';
import './album.scss';
import { Song } from './components/song/song';
import AlbumModel from '../../../../../../../../../data/albumModel';
import { Button } from '../../../../../../../ui/button/button';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { GiAlarmClock } from 'react-icons/gi';
import { AiTwotoneLike } from 'react-icons/ai';

interface AlbumProps {
  album: AlbumModel;
}

export const Album = ({album}: AlbumProps) => {
  return (
    <div className="album">
      <div className="album__info">
        <img
          className="album__image"
          alt="album"
          src={album.imgUrl}
        />
        <div className="album__details">
          <p className="album__year">{album.release.year}</p>
          <p className="album__name">{album.name}</p>
          <div className="album__actions">
            <Button type="basic" text="Save" className="album__button"/>
            <Button type="circle">
            <p><BiDotsHorizontalRounded size={15}/></p>
            </Button>
          </div>
        </div>
      </div>

      <div className="album__song-heading">
        <p className="album__heading-number">#</p>
        <p className="album__heading-title">Song</p>
        <div className="album__heading-length">
          <GiAlarmClock size={20}/>
        </div>
        <div className="album__heading-popularity">
          <AiTwotoneLike size={20}/>
        </div>
      </div>

      <div>
        {album.songs.map((song, index) => {
          return (
            <div key={song.id} className="album__song">
              <Song song={song} index={index}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}