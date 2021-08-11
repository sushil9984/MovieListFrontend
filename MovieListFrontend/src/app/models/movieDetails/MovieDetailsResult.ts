import { MovieDetailsMovieInformation } from "./MovieDetailsMovieInformation";

export interface MovieDetailsResult {
    movieDetails: MovieDetailsMovieInformation,
    status: string,
    errorMessage: string,
    exceptionType: string,
    failures: string
}