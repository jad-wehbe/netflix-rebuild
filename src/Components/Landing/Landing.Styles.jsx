import styled from "styled-components";
import BackgroundImage from "assets/Background.jpg";

// Custom colours
const red = "#E50914";
const darkRed = "#F24423";
const grey = "#8c8c8c";

// Background
export const Background = styled.div`
    height: 100vh;
    background-size: cover;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center center;
`;

export const BackgroundGradient = styled.div`
    position: absolute;
    inset: 0;
    height: 100%;
    background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.1) 60%,
            rgba(0, 0, 0, 0.8) 100%
        ),
        rgba(0, 0, 0, 0.4);
`;

// Header
export const Header = styled.div`
    position: relative;
    padding-top: 30px;
    margin: 0 5%;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 116px;
    height: 34px;
`;

export const SignInButton = styled.button`
    background-color: ${red};
    align-self: center;
    padding: 7px 17px;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 4px;
`;

// Main
export const Main = styled.div`
    height: 90%;
    width: 650px;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
`;

export const SubTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 3rem 0;
    text-align: center;
`;

export const Paragraph = styled.p`
    margin: 1.2rem 0;
    font-size: 1.1rem;
    font-weight: 400;
`;

export const Span = styled.span`
    font-size: 1.3rem;
    font-weight: 600;
`;

// Input
export const SignUp = styled.form`
    display: flex;
`;

export const Input = styled.input`
    flex: 1;
    outline: none;
    height: 60px;
    padding: 0 1.2rem;
    font-size: 1rem;
`;

export const SignUpButton = styled.button`
    background-color: ${red};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    font-size: 1.5rem;

    &:hover {
        background-color: ${darkRed};
    }
`;

export const Terms = styled.p`
    margin: 2rem 0;
    color: ${grey};
    font-size: 1rem;
`;

export const Guest = styled.a`
    color: #d4d4d4;
    font-size: 1rem;
    text-decoration: none;
    width: fit-content;

    &:hover {
        text-decoration: underline;
    }
`;
