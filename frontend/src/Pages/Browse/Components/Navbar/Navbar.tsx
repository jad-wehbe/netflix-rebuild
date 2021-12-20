import logoSvg from "assets/Logo.svg";
import DownArrow from "assets/DownArrow.svg";
import * as Styles from "./Navbar.styles";
import { useState, useEffect } from "react";
import { auth } from "utils/Firebase";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState<string | null>();

    const history = useHistory();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUsername(user.displayName);
            } else {
                console.log("Nope");
                history.push("/")
            }
        });
        unsubscribe();
    }, [history]);

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(auth.currentUser);
    };

    const handleLogout = () => {
        console.log("Starting logout");
        signOut(auth).then(() => history.push("/"));
    };

    return (
        <>
            <Styles.Nav>
                <Styles.Logo src={logoSvg} alt="Logo" />
                <Styles.Search placeholder="I'm searching for..." />
                <Styles.Profile onClick={handleClick}>
                    <Styles.Avatar />
                    <Styles.DownArrow src={DownArrow} />
                </Styles.Profile>
            </Styles.Nav>
            <Styles.Dropdown isOpen={isOpen}>
                <Styles.P>Hello {username}</Styles.P>
                <Styles.P>Signed in with {auth.currentUser?.email}</Styles.P>
                <Styles.A onClick={handleLogout}>Sign out</Styles.A>
            </Styles.Dropdown>
        </>
    );
}

export default Header;
