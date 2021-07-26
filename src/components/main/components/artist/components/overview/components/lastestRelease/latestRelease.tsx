import React from 'react';
import AlbumModel from '../../../../../../../../../data/albumModel';
import './latestRelease.scss';

interface LatestReleaseProps {
  album: AlbumModel;
}

export const LatestRelease = ({album}: LatestReleaseProps) => {
  const release = `${album.release.day} ${album.release.month} ${album.release.year}`
  return (
    <div className="latest-release">
      <img
        className="latest-release__image"
        alt="album"
        src={album.imgUrl}
      />
      <div className="latest-release__info">
        <p>{album.name}</p>
        <p>{release}</p>
      </div>
    </div>
  )
}