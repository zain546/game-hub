import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
     id:number;
     name:string;
     slug: string;
     metacritic:number;

}
export interface Game {
    metacritic: number;
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{ platform: Platform}[]
  }
 
const useGames = (selectedGenre: Genre | null)=>useData<Game>('/games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id]);

export default useGames;