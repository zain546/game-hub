import useData from "./useData";

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
 
const useGames = ()=>useData<Game>('/games')

export default useGames;