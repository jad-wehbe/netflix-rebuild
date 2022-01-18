// import * as Styles from "./Browse.styles"

import {useState, useEffect} from "react"
import { useHistory } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "utils/Firebase";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Navbar/Navbar";
import Lists from "./Components/Lists/Lists";

function Browse() {

    const [user, setUser] = useState<User | null>();

    const history = useHistory();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user);
            } else {
                history.push("/")
            }
        });
        unsubscribe();
    }, [history]);

    return (
        <>
            <Header user={user}/>
            <Banner />
            <Lists />
        </>
    );
}

export default Browse;
