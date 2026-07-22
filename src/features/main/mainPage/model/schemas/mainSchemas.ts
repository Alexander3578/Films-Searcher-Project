import * as z from 'zod'

export const movieResultSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.number().array(),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
})

export const movieSchema = z.object({
    page: z.number().nonnegative(),
    results: movieResultSchema.array(),
    total_pages: z.number().nonnegative(),
    total_results: z.number().nonnegative()
})

export const datesSchema = z.object({
    maximum:  z.string().date(),
    minimum:  z.string().date()
})

export const movieTypeWithDatesSchema = movieSchema.extend({
    dates: datesSchema
})