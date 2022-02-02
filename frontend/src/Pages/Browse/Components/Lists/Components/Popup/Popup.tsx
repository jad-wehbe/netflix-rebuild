import { ResultType } from "api/requests";
import { useEffect, useState } from "react";
import * as Styles from "./Popup.styles";

interface IProps {
    movie: ResultType | undefined;
    display: boolean;
}

// TODO: Popup not showing twice on a same movie
function Popup(props: IProps) {
    const [display, setDisplay] = useState(props.display);

    const Title =
        props.movie?.name ||
        props.movie?.original_title ||
        props.movie?.title ||
        props.movie?.original_name;

    useEffect(() => setDisplay(props.display), [props]);

    console.log(props.movie);

    const handleDateSplit = () => {
        const date = props.movie?.release_date || props.movie?.first_air_date;
        return date ? date.split("-")[0] : "date not found";
    };

    return (
        <Styles.Popup display={display}>
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
                        setDisplay(false);
                    }}
                >
                    x
                </Styles.CloseButton>
            </Styles.PopupContainer>
        </Styles.Popup>
    );
}

export default Popup;
