import * as z from 'zod'
import {movieResultSchema, movieSchema, movieTypeWithDatesSchema} from '../model/schemas/mainSchemas';

export type GetMovieParams = {
    page?: number
    language?: string
}

export type MovieType = z.infer<typeof movieSchema>

export type MovieTypeWithDates = z.infer<typeof movieTypeWithDatesSchema>

export type MovieResults = z.infer<typeof movieResultSchema>

