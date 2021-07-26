import React from 'react';
import './relatedArtistCard.scss';
import relatedArtists from '../../../../../../../../../data/relatedArtists';

interface RelatedArtistsProps {
  artist: relatedArtists;
}

export const RelatedArtistCard = ({artist}: RelatedArtistsProps) => {
  return (
    <div className="related-artist">
      <img
        className="related-artist__image"
        alt="artist"
        src={artist.imgUrl}
      />
      <a href="#" className="related-artist__name">{artist.artist}</a>
    </div>
  )
}