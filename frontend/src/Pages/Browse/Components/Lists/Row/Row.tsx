// import api from "api/axios";
import { MovieInterface } from "api/requests";
import { useState } from "react";
import * as Styles from "./Row.styles";
// import { test_movies } from "utils/Debug";
import { useAppDispatch } from "app/hooks";
import { setMovie, showPopup } from "../../../movieSlice";
import { useFetchData } from "hooks/useFetchData";

interface IProps {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

function Row(props: IProps) {
    // const [movies, setMovies] = useState<ResultType[]>([]);
    const [movieID, setMovieID] = useState<number>();
    const [showDetails, setShowDetail] = useState(false);

    const { movies } = useFetchData(props.fetchUrl);

    const dispatch = useAppDispatch();

    const Title = (movie: MovieInterface) =>
        movie?.name ||
        movie?.original_title ||
        movie?.title ||
        movie?.original_name;

    // //! For Debugging
    // useEffect(() => {
    //     console.log("Debugging mode");
    //     setMovies(test_movies);
    // }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await api.get(props.fetchUrl);
    //         setMovies(request.data.results);
    //     }
    //     fetchData();
    // }, [props.fetchUrl]);

    const handleShowDetails = (movie: MovieInterface) => {
        if (showDetails && movieID === movie.id)
            return (
                <>
                    <h3>{Title(movie)}</h3>
                    <p>Click to see more Details</p>
                </>
            );
        else return <></>;
    };

    const handleClick = (movie: MovieInterface) => {
        console.log(movie);
        dispatch(setMovie(movie));
        dispatch(showPopup());
    };

    const fetchPosters = () => {
        const baseURL = "https://image.tmdb.org/t/p/w300/";
        return movies.map((movie) => (
            <Styles.Poster
                key={movie.id}
                onMouseEnter={() => {
                    setMovieID(movie.id);
                    setShowDetail(true);
                }}
                onClick={() => handleClick(movie)}
                onMouseLeave={() => {
                    setMovieID(movie.id);
                    setShowDetail(false);
                }}
                isLarge={props.isLargeRow}
                background_path={`${baseURL}${
                    props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
            >
                {handleShowDetails(movie)}
            </Styles.Poster>
        ));
    };

    return (
        <Styles.Container>
            <Styles.H2>{props.title}</Styles.H2>
            <Styles.Posters>{fetchPosters()}</Styles.Posters>
        </Styles.Container>
    );
}

export default Row;
