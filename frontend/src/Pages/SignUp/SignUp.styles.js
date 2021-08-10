import styled from "styled-components";
import BackgroundImage from "assets/Background.jpg";

const red = "#E50914";
const grey = "#737373";

export const Background = styled.div`
    height: 100vh;
    background-size: cover;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center center;
`;

export const BackgroundGradient = styled.div`
    height: 100%;
    background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.1) 60%,
            rgba(0, 0, 0, 0.8) 100%
        ),
        rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
    inset: 0;
    padding-top: 30px;
    margin: 0 5%;
`;

export const Logo = styled.img`
    width: 116px;
    height: 34px;
`;

export const Form = styled.form`
    color: white;
    max-width: 29rem;
    height: 660px;
    margin: 5% auto;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const Container = styled.div`
    height: 100%;
    padding: 4rem;
`;

export const H2 = styled.h2`
    padding-bottom: 2rem;
    font-weight: 700;
    font-size: 2rem;
`;

export const Input = styled.input`
    display: block;
    outline: none;
    border: none;
    width: calc(100% - 2rem);
    padding: 1rem;
    margin-top: 1.5rem;
    font-size: 1rem;
    background-color: #333333;
    border-radius: 4px;
    color: #a0a0a0;
    &:-internal-autofill-selected {
        display: block;
        outline: none;
        border: none;
        width: calc(100% - 2rem);
        padding: 1rem;
        margin-top: 1.5rem;
        font-size: 1rem;
        background-color: #333333;
        border-radius: 4px;
        color: #a0a0a0;
    }
`;

export const Error = styled.p`
    margin-top: 0.5rem;
    color: #a0a0a0;
    /* position: absolute; */
`;

export const SignInButton = styled.button`
    color: white;
    border: none;
    background-color: ${red};
    align-self: center;
    margin: 2rem 0 1rem 0;
    padding: 1rem 0;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
`;

export const Paragraph = styled.p`
    margin: 2% 0;
    color: ${grey};
`;

export const Span = styled.span`
    padding-left: 0.5rem;
    &:hover {
        text-decoration: underline;
    }
`;
