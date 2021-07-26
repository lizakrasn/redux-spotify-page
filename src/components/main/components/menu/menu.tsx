import react, {useState} from 'react';
import './menu.scss';
import playlist from '../../../../data/playlists.json';
import song from '../../../../data/playing.json';

import { Navigation } from './components/navigation/navigation';
import { AddPlaylist } from './components/addPlaylist/addPlaylist';
import { Playing } from './components/playing/playing';

import { VscBrowser } from 'react-icons/vsc';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FiRadio } from 'react-icons/fi';
import { FaHeadphones } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { AiOutlineFile } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

export const Menu = () => {
  const [currentSong, setCurrentSong] = useState(song)

  return (
    <div className="menu">
      <section className="menu__navigation-block">
        <Navigation name='Main'>
          <a href="#" className="navigation__item">
            <span className="navigation__icon">
              <VscBrowser size={12}/>
            </span>
            <p className="navigation__item-text">Browse</p>
          </a>
          <a href="#" className="navigation__item">
            <span className="navigation__icon">
              <BsFillPeopleFill size={12} />
            </span>
            <p className="navigation__item-text">Activity</p>
          </a>
          <a href="#" className="navigation__item">
            <span className="navigation__icon">
              <FiRadio size={12} />
            </span>
            <p className="navigation__item-text">Radio</p>
          </a>
        </Navigation>

        <Navigation name='Your music'>
          <a href="#" className="navigation__item">
            <span className="navigation__icon">
              <FaHeadphones size={12}/>
            </span>
            <p className="navigation__item-text">Songs</p>
          </a>
          <a href="#" className="navigation__item">
            <span className="navigation__icon">
              <FaMusic size={12} />
            </span>
            <p className="navigation__item-text">Albums</p>
          </a>
          <a href="#" className="navigation__item">
            <span className="navigation__icon">
              <BsFillPersonFill size={12} />
            </span>
            <p className="navigation__item-text">Artists</p>
          </a>
          <a href="#" className="navigation__item">
            <span className="navigation__icon">
              <AiOutlineFile size={12} />
            </span>
            <p className="navigation__item-text">Local Files</p>
          </a>
        </Navigation>

        <Navigation name='Playlists'>
          {playlist.list.map(item => {
            return (
              <a key={item.id} href="#" className="navigation__item">
                <span className="navigation__icon"><FaMusic size={12}/></span>
                <p className="navigation__item-text">{item.name}</p>
              </a>
            )
          })}
        </Navigation>
      </section>

      <section className="menu__playlist">
        <AddPlaylist />
      </section>

      <section className="menu__playing">
        <Playing song={currentSong}/>
      </section>
    </div>
  )
}