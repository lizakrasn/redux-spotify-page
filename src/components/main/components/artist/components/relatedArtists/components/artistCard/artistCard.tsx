import React from 'react';
import './artistCard.scss';

interface ArtistCardProps {
  artist: string;
  imgUrl: string;
}

export const ArtistCard = ({artist, imgUrl}: ArtistCardProps) => {
  return (
    <div className="artist-card">
      <div className="artist-card__image-container">
        <img className="artist-card__image" src={imgUrl} alt="artist"/>
      </div>
      <a href="#" className="artist-card__name">{artist}</a>
    </div>
  )
}