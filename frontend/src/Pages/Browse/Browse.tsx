import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "utils/Firebase";
import { useAppSelector } from "app/hooks";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Navbar/Navbar";
import Lists from "./Components/Lists/Lists";
import Popup from "./Components/Popup/Popup";
import * as Styles from "./Browse.styles";

function Browse() {
    const [user, setUser] = useState<User | null>(null);

    const movie = useAppSelector((state) => state.movie.movie);
    const open = useAppSelector((state) => state.movie.popup);

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
        <Styles.Container>
            <Popup movie={movie} open={open} />
            <Header user={user} />
            <Banner />
            <Lists />
        </Styles.Container>
    );
}

export default Browse;
