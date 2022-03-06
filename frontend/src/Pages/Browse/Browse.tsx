import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "utils/Firebase";
import { useAppSelector } from "app/hooks";
import { Popup, Header, Banner, Lists } from "./Components";
import * as Styles from "./Browse.styles";
//import { test_movie } from "utils/Debug";

function Browse() {
    const [user, setUser] = useState<User | null>(null);

    const movie = useAppSelector((state) => state.movie.movie);
    const open = useAppSelector((state) => state.movie.popup);
    // For Debugging Onlyy !!!
    //const movie = test_movie;
    //const open = true;

    const history = useHistory();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user);
            } else {
                history.push("/");
            }
        });
        return () => unsubscribe();
    }, [history]);

    return (
        <>
            <Helmet>
                <title>Browse Page</title>
            </Helmet>
            <Styles.Container StopScroll={open}>
                <Popup movie={movie} open={open} />
                <Styles.Mask blur={open}>
                    <Header user={user} />
                    <Banner />
                    <Lists />
                </Styles.Mask>
            </Styles.Container>
        </>
    );
}

export default Browse;
