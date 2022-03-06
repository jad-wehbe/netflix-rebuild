import { MovieInterface } from "api/requests";

const getTitle = (movie: MovieInterface): string => {
    return (
        movie?.name ||
        movie?.title ||
        movie?.original_name ||
        movie?.original_title ||
        ""
    );
};

export { getTitle };
