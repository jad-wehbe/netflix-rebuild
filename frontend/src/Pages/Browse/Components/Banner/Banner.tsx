import { useState } from "react";
import * as Styles from "./Banner.styles";
import { useTruncate } from "hooks/useTruncate";
import { getTitle } from "utils/getTitle";
import { useFetchData } from "hooks/useFetchData";
import { requests } from "api/requests";

function Banner() {
    const [readMore, setReadMore] = useState(false);
    const { randMovie } = useFetchData(requests.fetchTrending);
    const [truncate, showReadMore] = useTruncate(randMovie.overview!, 150, readMore);

    const Title = getTitle(randMovie);

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

    return (
        <Styles.Container>
            <Styles.Banner>
                <Styles.BannerContainer>
                    <Styles.Title>{Title}</Styles.Title>
                    <Styles.List>
                        <Styles.ListItem>
                            {randMovie?.release_date
                                ? randMovie.release_date.split("-")[0]
                                : "date not found"}
                        </Styles.ListItem>
                        <Styles.ListItem>
                            {randMovie?.adult ? "+18" : "PG-G"}
                        </Styles.ListItem>
                        <Styles.ListItem>
                            Rate: {randMovie?.vote_average}/10
                        </Styles.ListItem>
                        <Styles.ListItem>{randMovie?.runtime} min</Styles.ListItem>
                        <Styles.ListItem>
                            en-
                            {randMovie?.original_language?.toLocaleUpperCase()}
                        </Styles.ListItem>
                    </Styles.List>
                    <Styles.Overview>
                        {truncate}
                        {ReadMore()}
                    </Styles.Overview>
                    <Styles.ButtonContainer>
                        <Styles.Button>Play</Styles.Button>
                        <Styles.Button>My list</Styles.Button>
                    </Styles.ButtonContainer>
                </Styles.BannerContainer>
            </Styles.Banner>
            <Styles.Poster
                backdrop_path={`https://image.tmdb.org/t/p/original/${randMovie?.backdrop_path}`}
                poster_path={`https://image.tmdb.org/t/p/original/${randMovie?.poster_path}`}
            />
        </Styles.Container>
    );
}

export default Banner;
