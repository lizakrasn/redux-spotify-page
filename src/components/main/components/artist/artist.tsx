import React, {useState} from 'react';
import './artist.scss';
import { RelatedArtists } from './components/relatedArtists/relatedArtists';
import { Overview } from './components/overview/overview';
import artistsData from '../../../../../data/relatedArtists.json';

import artistData from '../../../../../data/artistData';
import { ArtistHeader } from './components/artistHeader/artistHeader';

const tabs = [
  {
    "value": "overview",
    "label": "OVERVIEW"
  },
  {
    "value": "related",
    "label": "RELATED ARTISTS"
  }
]

export const Artist = () => {
  const [relatedArtists, setRelatedArtists] = useState(artistsData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [artist, setArtist] = useState(artistData);

  return (
    <div className="artist">
      <ArtistHeader
        artist = {artist}
        tabs={tabs}
        activeTab={activeTab}
        handleOnTabClick={setActiveTab}
      />
      
      {activeTab.value === 'related'
        ? (
          <div className="artist__related-artists">
            <RelatedArtists artistsData={relatedArtists}/>
          </div>
        )
        : (
          <div className="artist__overview">
            <Overview
              albums={artist.albums}
              lastAlbum={artist.lastAlbum}
              popularSongs={artist.popularSongs}
              relatedArtists={relatedArtists}
            />
          </div>
        )
      }
    </div>
  )
}