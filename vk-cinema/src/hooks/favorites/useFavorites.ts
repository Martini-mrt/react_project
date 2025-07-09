import { useMutation, useQuery } from "@tanstack/react-query";
import { addToFavorites, deleteFavorites, getFavorites } from "../../api/favorites/favorites";
import { wrapQueryFn } from "../../utils/wrapQueryFn";
// import { TMovie } from "../../api/Schema/MoviesSchem";
import { queryClient } from "../../api/queryClient";

// console.log(getFavorites())
//   console.log(addToFavorites("99"))

// console.log(deleteFavorites("100"))

export const useGetFavorites = () => {
  return useQuery({
    queryKey: ["favorites", "get"],
    queryFn: wrapQueryFn(getFavorites),
  });
};

export const useDeleteFavorites = () => {
  return useMutation({
    mutationFn: (id: string) => wrapQueryFn(() => deleteFavorites(id))(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites", "get"] });
    },
  });
};

export const useAddToFavorites = () => {
  return useMutation({
    mutationFn: (id: string) => wrapQueryFn(() => addToFavorites(id))(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites", "get"] });
    },
  });
};


//  export const useFavorites = () => {

//   const listFavorites: UseQueryResult<TMovie[], Error> = useQuery({
//     queryKey: ["favorites", "get"],
//     queryFn: wrapQueryFn(getFavorites),
//   });

// const deleteByIdFavorites = useMutation({
//     mutationFn: (id: string) => wrapQueryFn(() => deleteFavorites(id))(),
//     onSuccess: () => {
//       // ⬇️ ключевая часть: пересоздаём кэш
//       queryClient.invalidateQueries({ queryKey: ["favorites", "id"] });
//     },
//   });

//   return {listFavorites, deleteByIdFavorites }
// };

// export const useLogin = () => {
//   return useMutation({
//     mutationKey: ["auth", "login"],
//     mutationFn: wrapQueryFn(({ email, password }: { email: string; password: string }) => login(email, password)),
//   });
// };
