import useData from "./useData";

 export interface Platform {
    id:number;
    name:string;
    slug:string;
    metacritic: number;
}

const usePlatforms = ()=>useData<Platform>('/platforms/lists/parents')

export default usePlatforms;