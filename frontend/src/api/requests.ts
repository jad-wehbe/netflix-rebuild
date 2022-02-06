import api from "./axios";

//! NOT SECURE AT ALL
const API_KEY = "e3c57b0030cdf2d733c59f17dfe98759";

export interface MovieInterface {
    adult?: boolean;
    backdrop_path?: string | null;
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;
    media_type?: string;
    name?: string;
    original_language?: string;
    original_name?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string | null;
    release_date?: string;
    runtime?: number | undefined;
    title?: string;
    vote_average?: number;
}

export const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export const fetchMovieRuntime = async (id: number, media_type = "movie") => {
    try {
        const res = await api.get(`/${media_type}/${id}?api_key=${API_KEY}`);
        return res.data.runtime as number;
    } catch (err) {
        console.error(err);
    }
};
