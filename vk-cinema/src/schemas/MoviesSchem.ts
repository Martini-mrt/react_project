import { z } from "zod";


export const MovieSchema = z.object({
    id: z.number(),
    genres: z.array(z.string()),
    backdropUrl: z.string().nullable(),
    plot: z.string(),
    posterUrl: z.string().nullable(),
    trailerUrl: z.string(),
    title: z.string(),
    releaseYear: z.number(),
    tmdbRating: z.number(),
    runtime: z.number(),
});


export const MoviesGenresSchema = z.array(z.string());

export const MoviesSchemaList = z.array(MovieSchema);

export const SuccessMovieSchema = z.union([ MovieSchema , MoviesSchemaList, MoviesGenresSchema]);

// Тип, выводимый **автоматически** из схемы
export type TMovie = z.infer<typeof MovieSchema>;

// export type TMovieList = z.infer<typeof MoviesSchemaList>;











// export const topMovieSchema = z.object({
//     id: z.number(),
//     // backdropUrl: z.string(),
    
//     // genres: z.array(z.string()),
//     // plot: z.string(),
//     // posterUrl: z.string(),
//     // trailerUrl: z.string(),
//     // title: z.string(),
// });


// // Тип, выводимый **автоматически** из схемы
// export type TTopMovie = z.infer<typeof topMovieSchema>;



// export const randomMovieSchema = z.object({
//     id: z.number(),
//     backdropUrl: z.string().nullable(),
//     genres: z.array(z.string()),
//     plot: z.string(),
//     posterUrl: z.string().nullable(),
//     trailerUrl: z.string(),
//     title: z.string(),
// });


// // Тип, выводимый **автоматически** из схемы
// export type TRandomMovie= z.infer<typeof randomMovieSchema>;

