import styled from "styled-components";

export const H2 = styled.h2``;

export const Container = styled.div`
    margin-bottom: 3rem;
`;

export const Posters = styled.div`
    margin-top: 1.5rem;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`;
interface IProps {
    background_path: string;
    isLarge?: boolean;
}

export const Poster = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: ${(props) => (props.isLarge ? 440 : 169)}px;
    min-width: 300px;
    object-fit: contain;
    margin-right: 2rem;
    transition: transform 450ms;

    background-image: url(${(props) => props.background_path || ""});
    background-color: grey;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        background: linear-gradient(rgba(20, 20, 20, 1), rgba(5, 5, 5, 0.4)),
            url(${(props) => props.background_path || ""});
    }
`;

export const Movie = styled.div`
    height: 150px;
    width: 100%;

    max-height: inherit;
    object-fit: contain;
`;
