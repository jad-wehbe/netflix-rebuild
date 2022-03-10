import { MovieInterface } from "api/requests";
import * as Styles from "./Row.styles";
import { useAppDispatch } from "app/hooks";
import { setMovie, showPopup } from "../../../movieSlice";
import { useFetchData } from "hooks/useFetchData";
import { getTitle } from "utils/getTitle";

interface IProps {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

function Row(props: IProps) {
    const { movies } = useFetchData(props.fetchUrl);

    const dispatch = useAppDispatch();

    const handleClick = (movie: MovieInterface) => {
        dispatch(setMovie(movie));
        dispatch(showPopup());
    };

    const fetchPosters = () => {
        const baseURL = "https://image.tmdb.org/t/p/w300/";
        return movies.map((movie) => (
            <Styles.Poster
                key={movie.id}
                onClick={() => handleClick(movie)}
                isLarge={props.isLargeRow}
                background_path={`${baseURL}${
                    props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
            >
                <Styles.Title>{getTitle(movie)}</Styles.Title>
                <Styles.Details>Click to see more Details</Styles.Details>
            </Styles.Poster>
        ));
    };

    return (
        <Styles.Container>
            <Styles.Type>{props.title}</Styles.Type>
            <Styles.Posters>{fetchPosters()}</Styles.Posters>
        </Styles.Container>
    );
}

export default Row;
