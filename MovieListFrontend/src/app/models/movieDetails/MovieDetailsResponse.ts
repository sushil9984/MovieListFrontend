import { MovieDetailsResult } from "./MovieDetailsResult";

export interface MovieDetailsResponse {
    result: MovieDetailsResult,
    status: string,
    exception: string
}