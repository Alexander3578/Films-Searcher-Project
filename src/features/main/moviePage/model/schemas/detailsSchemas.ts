import * as z from 'zod'

export const collectionBelongsSchema = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
})

export const genresSchema = z.object({
    id: z.number(),
    name: z.string()
})

export const companiesSchema= z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string()
})

export const countriesSchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
})

export const languageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
})

export const movieDetailsSchema = z.object({
        adult: z.boolean(),
        backdrop_path: z.string().nullable(),
        belongs_to_collection: collectionBelongsSchema.nullable(),
        budget: z.number(),
        genres: genresSchema.array(),
        homepage: z.string(),
        id: z.number(),
        imdb_id: z.string().nullable(),
        origin_country: z.string().array(),
        original_language: z.string(),
        original_title: z.string(),
        overview: z.string(),
        popularity: z.number(),
        poster_path: z.string().nullable(),
        production_companies: companiesSchema.array(),
        production_countries: countriesSchema.array(),
        release_date: z.string(),
        revenue: z.number(),
        runtime: z.number(),
        spoken_languages: languageSchema.array(),
        status: z.string(),
        tagline: z.string(),
        title: z.string(),
        video: z.boolean(),
        vote_average: z.number(),
        vote_count: z.number(),
})

export const castSchema = z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    cast_id: z.number(),
    character: z.string(),
    credit_id: z.string(),
    order: z.number(),
})

export const movieCreditsSchema = z.object({
    id: z.number(),
    cast: castSchema.array()
})