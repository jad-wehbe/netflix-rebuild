import { ResultType } from "api/requests";
import * as Styles from "./Popup.styles";

interface IProps {
    movie: ResultType | undefined;
    display: boolean;
}

function Popup(props: IProps) {
    console.log(props);
    return (
        <Styles.PopUp display={props.display}>
            <h1>{props.movie?.original_name}</h1>
        </Styles.PopUp>
    );
}

export default Popup;
