import * as z from 'zod'
import {movieCreditsSchema, movieDetailsSchema} from '../model/schemas/detailsSchemas';

export type MovieDetailsParams = {
    language?: string
}

export type MovieDetailsType = z.infer<typeof movieDetailsSchema>

export type MovieCreditsType = z.infer<typeof movieCreditsSchema>

