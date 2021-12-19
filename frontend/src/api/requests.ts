import api from "./axios";

//! NOT SECURE AT ALL
const API_KEY = "e3c57b0030cdf2d733c59f17dfe98759";

export interface ResultType {
    id?: number;
    adult?: boolean
    poster_path?: string | null;
    backdrop_path?: string | null;
    overview?: string;
    original_title?: string;
    release_date?: string
    vote_average?: number;
    runtime?: number|undefined;
    genre_ids?: number[]
}

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

export const fetchRuntime = async (id:number|undefined) => {
  const res = await api.get(`/movie/${id}?api_key=${API_KEY}`)
  return res.data.runtime as number|undefined;
}
