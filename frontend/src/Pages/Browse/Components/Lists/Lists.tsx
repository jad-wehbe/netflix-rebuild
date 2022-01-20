import { requests } from "api/requests";
import Row from "./Components/Row/Row";
import * as Styles from "./Lists.styles";

function Lists() {
    return (
        <Styles.Container>
            <Row title="NETFLIX ORIGINALS" fetchUrl={ requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={ requests.fetchTrending }/>
            <Row title="Action Movies" fetchUrl={ requests.fetchActionMovies }/>
            <Row title="Comedy Movies" fetchUrl={ requests.fetchComedyMovies }/>
            <Row title="Romance Movies" fetchUrl={ requests.fetchRomanceMovies }/>
            <Row title="Horror Movies" fetchUrl={ requests.fetchHorrorMovies }/>
        </Styles.Container>
    );
}

export default Lists;
