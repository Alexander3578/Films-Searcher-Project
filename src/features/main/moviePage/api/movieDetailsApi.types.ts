import * as z from 'zod'
import {castSchema, movieCreditsSchema, movieDetailsSchema} from '../model/schemas/detailsSchemas';

export type MovieDetailsParams = {
    language?: string
}

export type MovieDetailsType = z.infer<typeof movieDetailsSchema>

export type MovieCreditsType = z.infer<typeof movieCreditsSchema>

export type CastType = z.infer<typeof castSchema>