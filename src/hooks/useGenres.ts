import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres')
export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

const useGenres = ()=>useQuery<FetchResponse<Genre>,Error>({
    queryKey:['genres',],
    queryFn:  apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, //24h
    // initialData:{count:genres.length,results:genres}
})
export default useGenres;