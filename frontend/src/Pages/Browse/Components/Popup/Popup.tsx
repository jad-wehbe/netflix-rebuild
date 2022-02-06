import { useEffect, useState } from "react";
import { MovieInterface } from "api/requests";
import { useAppDispatch } from "app/hooks";
import { resetMovie } from "Pages/Browse/movieSlice";
import * as Styles from "./Popup.styles";

interface IProps {
    movie: MovieInterface | undefined;
    open: boolean;
}

function Popup(props: IProps) {
    const [open, setOpen] = useState(props.open);

    const Title =
        props.movie?.name ||
        props.movie?.original_title ||
        props.movie?.title ||
        props.movie?.original_name;

    useEffect(() => setOpen(props.open), [props]);
    console.log(props);
    console.log(open);

    const dispatch = useAppDispatch();

    const handleDateSplit = () => {
        const date = props.movie?.release_date || props.movie?.first_air_date;
        return date ? date.split("-")[0] : "date not found";
    };

    return (
        <Styles.Popup open={open}>
            <Styles.PopupContainer>
                <Styles.Title>{Title}</Styles.Title>
                <Styles.List>
                    <Styles.ListItem>{handleDateSplit()}</Styles.ListItem>
                    <Styles.ListItem>
                        {props.movie?.adult ? "+18" : "PG-G"}
                    </Styles.ListItem>
                    <Styles.ListItem>
                        Rate: {props.movie?.vote_average}
                    </Styles.ListItem>
                    <Styles.ListItem>
                        {props.movie?.runtime} min
                    </Styles.ListItem>
                    <Styles.ListItem>
                        en-{props.movie?.original_language?.toLocaleUpperCase()}
                    </Styles.ListItem>
                </Styles.List>
                <Styles.Overview>
                    <Styles.Span>{props.movie?.overview}</Styles.Span>
                </Styles.Overview>
                <Styles.CloseButton
                    onClick={() => {
                        console.log("Clickeeeddd");
                        dispatch(resetMovie());
                        setOpen(false);
                    }}
                >
                    x
                </Styles.CloseButton>
            </Styles.PopupContainer>
        </Styles.Popup>
    );
}

export default Popup;
