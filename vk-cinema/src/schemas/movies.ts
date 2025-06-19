import { z } from "zod";


export const movieSchema = z.object({
    id: z.number(),
    genres: z.array(z.string()),
    backdropUrl: z.string().nullable(),
    plot: z.string(),
    posterUrl: z.string().nullable(),
    trailerUrl: z.string(),
    title: z.string(),
});


// Тип, выводимый **автоматически** из схемы
export type TMovie = z.infer<typeof movieSchema>;











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

