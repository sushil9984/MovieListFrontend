import { MovieInformation } from "./MovieInformation";

export interface Result {
    movies: MovieInformation[],
    status: string,
    errorMessage: string,
    exceptionType: string,
    failures: string
}