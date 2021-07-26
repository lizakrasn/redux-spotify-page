import react from 'react';
import './addPlaylist.scss';

import { IoIosAddCircleOutline } from 'react-icons/io';

export const AddPlaylist = () => {
  return (
    <a href="#" className="add-playlist">
      <IoIosAddCircleOutline size={25} />
      <p className="add-playlist__text">New Playlist</p>
    </a>
  )
}