import styled from "styled-components";

const red = "#E50914";

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
`;

export const Paragraph = styled.p`
    margin-top: 6rem;
    color: #737373;
`;

export const Span = styled.span`
    padding-left: 0.5rem;
    &:hover {
        text-decoration: underline;
    }
`;
