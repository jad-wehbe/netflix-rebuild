import { useEffect, useState } from "react";
import * as Styles from "./Banner.styles";
import {ResultType} from "api/requests"
// import { fetchRuntime, requests, ResultType } from "api/requests";
// import api from "api/axios";

function Banner() {
    const [show, setShow] = useState<ResultType>({});
    const [readMore, setReadMore] = useState(false);

    // ! For Debugging
    useEffect(() => {
        setShow({
            release_date: "2022-01-01",
            title: "Harry Potter 20th Anniversary: Return to Hogwarts",
            adult: false,
            backdrop_path: "/g8dafKwLfaueQ5GK0qjKTkRCBAA.jpg",
            id: 899082,
            genre_ids: [99],
            original_language: "en",
            original_title: "Harry Potter 20th Anniversary: Return to Hogwarts",
            poster_path: "/jntLBq0MLR3hrwKaTQswxACRPMs.jpg",
            vote_average: 8.4,
            overview:
                "An enchanting making-of story told through all-new in-depth interviews and cast conversations, inviting fans on a magical first-person journey through one of the most beloved film franchises of all time.",
            runtime: 156,
        });
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

    return (
        <Styles.Container>
            <Styles.Banner>
                <Styles.BannerContainer>
                    <Styles.Title>
                        {show?.name ||
                            show?.original_title ||
                            show?.original_name ||
                            show?.title}
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
