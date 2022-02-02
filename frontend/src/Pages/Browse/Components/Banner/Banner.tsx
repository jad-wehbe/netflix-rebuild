import { useState } from "react";
import * as Styles from "./Banner.styles";
// import {ResultType} from "api/requests"
// import { test_movie } from "utils/Debug";
import { useTruncate } from "utils/useTruncate";
import { useFetchData } from "utils/useFetchData";
import { requests } from "api/requests";
// import api from "api/axios";

function Banner() {
    // const [show, setShow] = useState<ResultType>({});
    const [readMore, setReadMore] = useState(false);
    const [show] = useFetchData(requests.fetchTrending);
    const truncate = useTruncate(show.overview, 150, readMore);

    // ! For Debugging
    // useEffect(() => {
    // setShow(test_movie);
    // }, []);

    // console.log(show);

    const handleReadMore = () => {
        setReadMore(!readMore);
    };

    const Title =
        show?.name ||
        show?.original_title ||
        show?.title ||
        show?.original_name;

    return (
        <Styles.Container>
            <Styles.Banner>
                <Styles.BannerContainer>
                    <Styles.Title>{Title}</Styles.Title>
                    <Styles.List>
                        <Styles.ListItem>
                            {show?.release_date
                                ? show.release_date.split("-")[0]
                                : "date not found"}
                        </Styles.ListItem>
                        <Styles.ListItem>
                            {show?.adult ? "+18" : "PG-G"}
                        </Styles.ListItem>
                        <Styles.ListItem>
                            Rate: {show?.vote_average}
                        </Styles.ListItem>
                        <Styles.ListItem>{show?.runtime} min</Styles.ListItem>
                        <Styles.ListItem>
                            en-{show?.original_language?.toLocaleUpperCase()}
                        </Styles.ListItem>
                    </Styles.List>
                    <Styles.Overview>
                        {truncate}
                        <Styles.Span onClick={handleReadMore}>
                            {readMore ? "Read Less" : "Read More"}
                        </Styles.Span>
                    </Styles.Overview>
                    <Styles.ButtonContainer>
                        <Styles.Button>Play</Styles.Button>
                        <Styles.Button>My list</Styles.Button>
                    </Styles.ButtonContainer>
                </Styles.BannerContainer>
            </Styles.Banner>
            <Styles.Poster
                backdrop_path={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`}
                poster_path={`https://image.tmdb.org/t/p/original/${show?.poster_path}`}
            />
        </Styles.Container>
    );
}

export default Banner;
