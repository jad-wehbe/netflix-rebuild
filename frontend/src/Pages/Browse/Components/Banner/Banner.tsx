import { useEffect, useState } from "react";
import * as Styles from "./Banner.styles";
import {ResultType} from "api/requests"
import { test_movie } from "utils/Debug";
// import { fetchRuntime, requests, ResultType } from "api/requests";
// import api from "api/axios";

function Banner() {
    const [show, setShow] = useState<ResultType>({});
    const [readMore, setReadMore] = useState(false);

    // ! For Debugging
    useEffect(() => {
        setShow(test_movie);
    }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await api.get(requests.fetchTrending);
    //         // console.log(request.data.results);
    //         setShow(
    //             request.data.results[
    //                 Math.floor(Math.random() * request?.data.results.length)
    //             ]
    //         );
    //         const runtime = await fetchRuntime(request?.data.results[0].id);
    //         setShow((prevState) => ({ ...prevState, runtime: runtime }));
    //     }
    //     fetchData();
    // }, []);

    const handleReadMore = () => {
        setReadMore(!readMore)
    }

    function truncate(str: string | undefined, n: number, enable: boolean): string {
        if (str) {
            if(str.length > n && !enable) return str.substring(0, n - 1) + "..."
            else return str;
        } else return "No overview";
    }

    const showTitle = show?.name || show?.original_title || show?.title || show?.original_name;

    return (
        <Styles.Container>
            <Styles.Banner>
                <Styles.BannerContainer>
                    <Styles.Title>
                        {showTitle}
                    </Styles.Title>
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
                        {truncate(show?.overview, 150, readMore)}
                        <Styles.Span onClick={handleReadMore}>{readMore?"Read Less" : "Read More"}</Styles.Span>
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
