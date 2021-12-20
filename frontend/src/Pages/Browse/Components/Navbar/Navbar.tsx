import logoSvg from "assets/Logo.svg";
import DownArrow from "assets/DownArrow.svg";
import * as Styles from "./Navbar.styles";
import { useState } from "react";
import { auth } from "utils/Firebase";
import { signOut, User } from "firebase/auth";
import { useHistory } from "react-router-dom";

interface IProps {
    user: User | undefined | null;
}

function Header(props:IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const username = props.user?.displayName;

    const history = useHistory();

    const handleClick = () => {
        setIsOpen(!isOpen);
        // console.log(auth.currentUser);
    };

    const handleLogout = () => {
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
