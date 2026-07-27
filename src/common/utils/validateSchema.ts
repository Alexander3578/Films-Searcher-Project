import { z } from 'zod'
import {AxiosResponse} from 'axios';

export async function request<T extends z.ZodTypeAny>(
    promise: Promise<AxiosResponse>,
    schema: T
): Promise<z.infer<T>> {
    const { data } = await promise

    if (import.meta.env.PROD) {
        return data
    }

    return schema.parse(data)
}