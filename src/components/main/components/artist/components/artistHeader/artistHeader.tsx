import React from 'react';
import './artistHeader.scss';

import { Tabs } from '../../../../../ui/tabs/Tabs';
import TabsModel from '../../../../../../../data/tabs';
import ArtistModel from '../../../../../../../data/artist';
import { ArtistInfo } from './components/artistInfo/artistInfo';

interface ArtistHeaderProps {
  artist: ArtistModel;
  tabs: TabsModel[];
  activeTab: TabsModel;
  handleOnTabClick: (tab: TabsModel) => void;
}

export const ArtistHeader = ({
  artist,
  tabs,
  activeTab,
  handleOnTabClick}: ArtistHeaderProps) => {
  return (
    <div className="artist-header">
      <div
        className="artist-header__background"
        style={{backgroundImage: `url(${artist.backgroundImgUrl})`}}
      ></div>

      <ArtistInfo artist={artist}/>

      <div className="artist-header__tabs">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          handleOnClick={handleOnTabClick}
        />
      </div>
    </div>
  )
}