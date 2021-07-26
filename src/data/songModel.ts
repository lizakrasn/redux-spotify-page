export type PopularityType = "up" | "down";

export default interface SongModel {
  name: string;
  imgUrl: string;
  listens: number;
  durationSeconds : number;
  id: number;
  albumId: number;
  popularity?: PopularityType;
  isAdded?: boolean;
  coartists: string;
}