import React from 'react';
import './overview.scss';

import { PopularSongs } from './components/popularSongs/popularSongs';
import { Album } from './components/album/album';
import { LatestRelease } from './components/lastestRelease/latestRelease';
import { RelatedArtistCard } from './components/relatedArtistCard/relatedArtistCard';
import AlbumModel from '../../../../../../../data/albumModel';
import SongModel from '../../../../../../../data/songModel';
import RelatedArtists from '../../../../../../../data/relatedArtists';
import { ViewTypes } from '../../../../../ui/viewTypes/viewTypes';
import artistData from '../../../../../../../data/artistData';


interface OverviewProps {
  albums: AlbumModel[];
  lastAlbum: AlbumModel;
  popularSongs: SongModel[];
  relatedArtists: RelatedArtists[];
}

export const Overview = ({
  albums,
  lastAlbum,
  popularSongs,
  relatedArtists}: OverviewProps) => {
  return (
    <div className="overview">
      <div className="overview__info">
        <div className="overview__artist">
          <p className="overview__title">Latest Release</p>
          <div className="overview__latest-release">
            <LatestRelease album={lastAlbum}/>
          </div>

          <p className="overview__title">Popular</p>
          <div className="overview__popular">
            <PopularSongs songs={popularSongs}/>
          </div>
        </div>

        <div className="overview__related">
          <p className="overview__title">Related Artists</p>
          <div className="overview__related-artists">
            {relatedArtists.map(atrist => {
              return (
                <RelatedArtistCard
                  key={atrist.id}
                  artist={atrist}
                />
              )
            })}
          </div>
        </div>
      </div>

      <div className="overview__albums">
        <div className="overview__album-head">
          <p className="overview__title">Albums</p>
          <ViewTypes />
        </div>
        {albums.map(album => {
          return (
            <div key={album.id} className="overview__album">
              <Album album={album} />
            </div>
          )
        })}
      </div>
    </div>
  )
}