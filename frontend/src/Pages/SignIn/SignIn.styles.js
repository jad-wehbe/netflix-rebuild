import styled from "styled-components";
import BackgroundImage from "assets/Background.jpg";

const red = "#E50914";

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
`;

export const Header = styled.div`
    inset: 0;
    padding-top: 30px;
    margin: 0 5%;
`;

export const Logo = styled.img`
    width: 116px;
    height: 34px;

    @media (max-width: 700px) {
        width: 100px;
        height: 30px;
    }
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
    padding: 6rem 4rem 0 4rem;
`;

export const H2 = styled.h2`
    padding-bottom: 3rem;
    font-weight: 700;
    font-size: 2rem;
`;

export const Input = styled.input`
    display: block;
    outline: none;
    border: none;
    width: calc(100% - 2rem);
    padding: 1rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    background-color: #333333;
    border-radius: 4px;
    color: #a0a0a0;
    &:-webkit-autofill {
        border-radius: 0 !important;
        box-shadow: 0 0 0 30px #1f1f1f inset !important;
        -webkit-box-shadow: 0 0 0 30px #1f1f1f inset !important;
        -webkit-text-fill-color: #666 !important;
    }
`;

export const Error = styled.p`
    margin-bottom: 0.5rem;
    color: ${red};
`;

export const SignInButton = styled.button`
    color: white;
    border: none;
    background-color: ${red};
    align-self: center;
    margin: 1rem 0;
    padding: 1rem 0;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
`;

export const ForgetPassword = styled.p`
    margin-top: 0.5rem;
    font-size: 1rem;
    text-align: right;
    color: #737373;

    &:hover {
        text-decoration: underline;
    }
`;

export const Paragraph = styled.p`
    margin-top: 4rem;
    color: #737373;
`;

export const Span = styled.span`
    padding-left: 0.5rem;
    &:hover {
        text-decoration: underline;
    }
`;
