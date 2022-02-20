import { fetchMovieTrailer } from "api/requests";
import { useState, useEffect } from "react";

const useFetchTrailer = (id?: number) => {
    const [key, setKey] = useState<string>();

    useEffect(() => {
        async function fetchTrailer() {
            const res = await fetchMovieTrailer(id!);
            if (res) setKey(res[0].key!);
        }
        fetchTrailer();

        return setKey(undefined);
    }, [id]);

    const trailer = key ? `https://www.youtube.com/watch?v=${key}` : undefined;
    return trailer;
};

export { useFetchTrailer };
