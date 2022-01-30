import styled from "styled-components";
import BackgroundImage from "assets/Background.jpg";

// Custom colours
const red = "#E50914";
const lightRed = "#ff5231";
const grey = "#b5b5b5";
const lightGrey = "#d3d3d3";

// Background
export const Background = styled.div`
    height: 100vh;
    min-height: 600px;
    background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 60%,
            rgba(0, 0, 0, 0.8) 100%
        ),
        url(${BackgroundImage}) no-repeat center center;
    background-size: cover;
`;

// Header
export const Header = styled.div`

    padding-top: 30px;
    margin: 0 5%;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 116px;
    height: 34px;

    @media (max-width: 700px) {
        width: 100px;
        height: 30px;
    }
`;

export const SignInButton = styled.button`
    color: white;
    border: 0;
    background-color: ${red};
    align-self: center;
    padding: 7px 17px;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${lightRed};
    }
`;

// Main
export const Main = styled.div`
    height: 90%;
    width: 90%;
    min-height: 500px;
    max-width: 50rem;
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

    @media (max-width: 700px) {
        font-size: 2rem;
    }
`;

export const SubTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 3rem 0;
    text-align: center;

    @media (max-width: 700px) {
        font-size: 1rem;
        margin: 1rem 0;
    }
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

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    flex: 1;
    outline: none;
    padding: 1.2rem;
    font-size: 1rem;

    @media (max-width: 700px) {
        margin-bottom: 1.2rem;
    }
`;

export const SignUpButton = styled.button`
    background-color: ${red};
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background-color: ${lightRed};
    }

    @media (max-width: 700px) {
        font-size: 1rem;
        width: 60%;
        margin: 0 auto;
        border-radius: 4px;
    }
`;

export const Error = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1rem 0;
    color: ${red};
`;

export const Terms = styled.p`
    margin: 3rem 0 1rem 0;
    color: ${lightGrey};
    font-size: 1rem;
`;

export const Guest = styled.a`
    margin-top: 1.5rem;
    color: ${grey};
    font-size: 1rem;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
