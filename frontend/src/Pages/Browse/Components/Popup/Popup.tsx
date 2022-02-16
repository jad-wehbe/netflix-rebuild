import { useEffect, useState } from "react";
import { fetchMovieTrailer, MovieInterface } from "api/requests";
import { useAppDispatch } from "app/hooks";
import { resetMovie } from "Pages/Browse/movieSlice";
import { useTruncate } from "hooks/useTruncate";
import * as Styles from "./Popup.styles";
import ReactPlayer from "react-player/lazy";
import { getTitle } from "utils/getTitle";

const useFetchTrailer = (id?: number) => {
    const [key, setKey] = useState<string>();

    useEffect(() => {
        async function fetchTrailer() {
            const res = await fetchMovieTrailer(id!);
            if (res) setKey(res[0].key!);
        }
        fetchTrailer();
    }, [id]);

    const trailer = key ? `https://www.youtube.com/watch?v=${key}` : undefined;
    return trailer;
};

interface IProps {
    movie: MovieInterface | undefined;
    open: boolean;
}

function Popup(props: IProps) {
    const [readMore, setReadMore] = useState(false);
    const [open, setOpen] = useState(false);
    const [truncate, showReadMore] = useTruncate(props.movie?.overview!, 150, readMore);
    const trailer = useFetchTrailer(props.movie?.id);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setOpen(props.open);
    }, [props]);

    const Title = getTitle(props.movie!);

    const ReadMore = (): JSX.Element => {
        return showReadMore ? (
            <Styles.Span
                onClick={() => {
                    setReadMore(!readMore);
                }}
            >
                {readMore ? "Read Less" : "Read More"}
            </Styles.Span>
        ) : (
            <></>
        );
    };

    const handleDateSplit = () => {
        const date = props.movie?.release_date || props.movie?.first_air_date;
        return date ? date.split("-")[0] : "date not found";
    };

    return (
        <Styles.Popup open={open}>
            <Styles.PopupContainer>
                <Styles.MovieContainer>
                    <Styles.Details>
                        <Styles.Title>{Title}</Styles.Title>
                        <Styles.List>
                            <Styles.ListItem>{handleDateSplit()}</Styles.ListItem>
                            <Styles.ListItem>
                                {props.movie?.adult ? "+18" : "PG-G"}
                            </Styles.ListItem>
                            <Styles.ListItem>
                                Rate: {props.movie?.vote_average}
                            </Styles.ListItem>
                            <Styles.ListItem>{props.movie?.runtime} min</Styles.ListItem>
                            <Styles.ListItem>
                                en-
                                {props.movie?.original_language?.toLocaleUpperCase()}
                            </Styles.ListItem>
                        </Styles.List>
                        <Styles.Overview>
                            {truncate}
                            {ReadMore()}
                        </Styles.Overview>
                    </Styles.Details>
                    <Styles.Poster
                        backdrop_path={`https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}`}
                        poster_path={`https://image.tmdb.org/t/p/original/${props.movie?.poster_path}`}
                    />
                </Styles.MovieContainer>
                {trailer ? <ReactPlayer url={trailer} controls /> : <Styles.Box />}
                <Styles.ButtonContainer>
                    <Styles.Button>My list</Styles.Button>
                </Styles.ButtonContainer>

                <Styles.CloseButton
                    onClick={() => {
                        setOpen(false);
                        dispatch(resetMovie());
                    }}
                >
                    x
                </Styles.CloseButton>
            </Styles.PopupContainer>
        </Styles.Popup>
    );
}

export default Popup;
