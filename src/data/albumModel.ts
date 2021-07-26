import SongModel from './songModel';

interface ReleaseDate {
  year: number;
  month: string;
  day: number;
}

export default interface AlbumModel {
  id: number;
  name: string;
  imgUrl: string;
  release: ReleaseDate;
  artistId: number;
  songs: SongModel[];
}