import { fetchMovieRuntime, MovieInterface } from "api/requests";
import { useEffect, useState } from "react";
import api from "api/axios";

interface IResponse {
    results: MovieInterface[] | undefined;
}

const useFetchData = (fetchUrl: string) => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    const [randMovie, setRandMovie] = useState<MovieInterface>({});

    useEffect(() => {
        async function fetchData() {
            const request = await api.get<IResponse>(fetchUrl);
            const movies = request.data.results;
            movies?.forEach(async (movie) => {
                const runtime = await fetchMovieRuntime(movie.id!);
                setMovies((prevState) => [...prevState, { ...movie, runtime }]);
            });

            let random = Math.floor(Math.random() * movies!.length);
            const runtime = await fetchMovieRuntime(movies![random].id!);
            movies ? setRandMovie({ ...movies![random], runtime }) : setRandMovie({});
        }
        fetchData();
    }, [fetchUrl]);

    return { movies, randMovie };
};

export { useFetchData };
