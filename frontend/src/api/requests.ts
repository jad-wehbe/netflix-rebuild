import api from "./axios";

//! NOT SECURE AT ALL
const API_KEY = "e3c57b0030cdf2d733c59f17dfe98759";

export interface ResultType {
    id?: number;
    adult?: boolean;
    backdrop_path?: string | null;
    poster_path?: string | null;
    overview?: string;
    title?: string;
    original_title?: string;
    name?: string;
    original_name?: string;
    release_date?: string;
    first_air_date?: string;
    vote_average?: number;
    runtime?: number | undefined;
    genre_ids?: number[];
    original_language?: string;
}

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export const fetchRuntime = async (id: number | undefined) => {
    const res = await api.get(`/movie/${id}?api_key=${API_KEY}`);
    return res.data.runtime as number | undefined;
};
