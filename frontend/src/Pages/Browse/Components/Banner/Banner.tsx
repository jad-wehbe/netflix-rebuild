import { useEffect, useState } from "react";
import * as Styles from "./Banner.styles";
import { fetchRuntime, requests, ResultType } from "api/requests";
import api from "api/axios";

function Banner() {
    const [show, setShow] = useState<ResultType>({});

    useEffect(() => {
        async function fetchData() {
            const request = await api.get(requests.fetchTrending);
            // console.log(request.data.results);
            setShow(request.data.results[Math.floor(Math.random()*request?.data.results.length)]);
            const runtime = await fetchRuntime(request?.data.results[0].id);
            setShow((prevState) => ({ ...prevState, runtime: runtime }));
        }
        fetchData();
    }, []);

    console.log(show);

    return (
        <Styles.Container>
            <Styles.Banner>
                <Styles.BannerContainer>
                    <Styles.Title>{show?.name || show?.original_title || show?.original_name || show?.title}</Styles.Title>
                    <Styles.List>
                        <Styles.ListItem>
                            {show?.release_date ? show.release_date.split("-")[0] : "Release date not found"}
                        </Styles.ListItem>
                        <Styles.ListItem>
                            {show?.adult ? "+18" : "PG-G"}
                        </Styles.ListItem>
                        <Styles.ListItem>
                            Rate: {show?.vote_average}
                        </Styles.ListItem>
                        <Styles.ListItem>{show?.runtime} min</Styles.ListItem>
                        <Styles.ListItem>en-{show?.original_language?.toLocaleUpperCase()}</Styles.ListItem>
                    </Styles.List>
                    <Styles.Overview>{show?.overview}</Styles.Overview>
                    <Styles.ButtonContainer>
                        <Styles.Button>Play</Styles.Button>
                        <Styles.Button>My list</Styles.Button>
                    </Styles.ButtonContainer>
                </Styles.BannerContainer>
            </Styles.Banner>
            <Styles.Poster
                path={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`}
            />
        </Styles.Container>
    );
}

export default Banner;
