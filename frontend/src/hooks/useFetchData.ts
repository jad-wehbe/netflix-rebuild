import { fetchMovieRuntime, MovieInterface } from "api/requests";
import { useEffect, useState } from "react";
import api from "api/axios";

// Todo: Fetch runtime when needed
const useFetchData = (fetchUrl: string) => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    const [randMovie, setRandMovie] = useState<MovieInterface>({});

    useEffect(() => {
        async function fetchData() {
            const request = await api.get(fetchUrl);
            let randomNum = Math.floor(
                Math.random() * request.data.results.length
            );
            setMovies(request.data.results);
            setRandMovie(request.data.results[randomNum]);
            const runtime = await fetchMovieRuntime(
                request.data.results[randomNum].id!,
                request.data.results[randomNum].media_type
            );
            setRandMovie((prevState) => ({ ...prevState, runtime }));
        }
        fetchData();
    }, [fetchUrl]);

    return { movies, randMovie };
};

export { useFetchData };
