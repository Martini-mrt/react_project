import { useApiQuery } from "../hooks/useApiQuery";
import { getMovie } from "../api/movies";
import { TMovie } from "../schemas/movies";

export const useMovieById = (id: string) => {
  return useApiQuery<TMovie>({
   key: ["movie", id], 
   queryFn: () => getMovie(id), 
   options: {
    enabled: !!id, // не запрашивать, пока нет id
  }
});
};