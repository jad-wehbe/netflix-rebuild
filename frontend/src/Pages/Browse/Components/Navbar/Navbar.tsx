import logoSvg from "assets/Logo.svg";
import DownArrow from "assets/DownArrow.svg";
import * as Styles from "./Navbar.styles";
import { useState } from "react";
import { auth } from "utils/Firebase";
import { signOut, User } from "firebase/auth";
import { useHistory } from "react-router-dom";
import avatar from "assets/avatar.png";

interface IProps {
    user: User | null;
}

function Header(props: IProps) {
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

    const checkIfAnonymous = () => {
        const handleLogin = () => {
            history.push("/SignIn");
        };

        if (props.user?.isAnonymous) {
            return (
                <>
                    <Styles.P>You are not signed in</Styles.P>
                    <Styles.P>Please SignIn First</Styles.P>
                    <Styles.A onClick={handleLogin}>Sign in</Styles.A>
                </>
            );
        } else {
            return (
                <>
                    <Styles.P>Hello {username}</Styles.P>
                    <Styles.P>
                        Signed in with {auth.currentUser?.email}
                    </Styles.P>
                    <Styles.A onClick={handleLogout}>Sign out</Styles.A>
                </>
            );
        }
    };

    return (
        <>
            <Styles.Nav>
                <Styles.Container>
                    <Styles.Logo src={logoSvg} alt="Logo" />
                    <Styles.Profile onClick={handleClick}>
                        <Styles.Avatar src={avatar} />
                        <Styles.DownArrow src={DownArrow} />
                    </Styles.Profile>
                </Styles.Container>
                <Styles.Dropdown isOpen={isOpen}>
                    {checkIfAnonymous()}
                </Styles.Dropdown>
            </Styles.Nav>
        </>
    );
}

export default Header;
