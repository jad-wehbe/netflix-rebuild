import logoSvg from "assets/Logo.svg";
import DownArrow from "assets/DownArrow.svg";
import * as Styles from "./Header.styles";
import { useState, useEffect } from "react";
import { auth } from "utils/Firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState<string|null>();
    const history = useHistory()
    useEffect(() => {
        function checkUser() {
            if (auth.currentUser !== null) {
                console.log(auth);
                setUsername(auth.currentUser.displayName);
            } else {
                console.log(auth);
                // history.push("/login")
            }
        }
        checkUser();
    }, [history]);

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(auth.currentUser);
    };

    const handleLogout = () => {
        console.log("Starting logout");
        signOut(auth).then(() => {
            history.push("/")
        })
    }

    return (
        <>
            <Styles.Header>
                <Styles.Logo src={logoSvg} alt="Logo" />
                <Styles.Search placeholder="I'm searching for..." />
                <Styles.Profile onClick={handleClick}>
                    <Styles.Avatar />
                    <Styles.DownArrow src={DownArrow} />
                </Styles.Profile>
            </Styles.Header>
            <Styles.Dropdown isOpen={isOpen}>
                <Styles.P>Hello {username}</Styles.P>
                <Styles.P>Signed in with {auth.currentUser?.email}</Styles.P>
                <Styles.A onClick={handleLogout}>Sign out</Styles.A>
            </Styles.Dropdown>
        </>
    );
}

export default Header;
