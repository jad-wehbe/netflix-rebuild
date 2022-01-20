import api from "api/axios";
import { ResultType } from "api/requests";
import { useEffect, useState } from "react";
import * as Styles from "./Row.styles";

interface IProps {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

function Row(props: IProps) {
    const [movies, setMovies] = useState<ResultType []>([])

    useEffect(() => {
        async function fetchData() {
            const request = await api.get(props.fetchUrl);
            setMovies(request.data.results)
        }
        fetchData()
    }, [props.fetchUrl])

    console.log(movies);

    const fetchPosters = () => {
        return movies.map((movie) => (
            <Styles.Poster key={movie.id} isLarge={props.isLargeRow} background_path={`https://image.tmdb.org/t/p/w300/${(props.isLargeRow ? movie?.poster_path : movie.backdrop_path)}`} >
            </Styles.Poster>
        ))
    }

    return (
        <Styles.Container>
            <Styles.H2>{ props.title }</Styles.H2>
            <Styles.Posters>
                {fetchPosters()}
            </Styles.Posters>
        </Styles.Container>
    );
}

export default Row;
