import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
 export interface Platform {
    id:number;
    name:string;
    slug:string;
    metacritic: number;
}

const usePlatforms = ()=>
    useQuery<FetchResponse<Platform>,Error>({
    queryKey:['platforms'],
    queryFn:apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, //24h
    // initialData:platforms,

})
export default usePlatforms;