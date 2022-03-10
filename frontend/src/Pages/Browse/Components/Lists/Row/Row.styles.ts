import styled from "styled-components";

export const Type = styled.h2`
    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

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

export const DetailContainer = styled.div`
    display: hidden;
    width: 100%;
    height: 100%;

    &:hover {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Title = styled.h4`
    text-align: center;
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
export const Details = styled.p`
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

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

    & > h4 {
        display: none;
    }

    & > p {
        display: none;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        background: linear-gradient(rgba(20, 20, 20, 1), rgba(5, 5, 5, 0.4)),
            url(${(props) => props.background_path || ""});

        & > h4,
        & > p {
            display: block;
        }
    }

    @media (max-width: 768px) {
        height: ${(props) => (props.isLarge ? 350 : 126)}px;
        min-width: 223px;

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            background: linear-gradient(rgba(20, 20, 20, 1), rgba(5, 5, 5, 0.4)),
                url(${(props) => props.background_path || ""});
            background-color: grey;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
`;

export const Movie = styled.div`
    height: 150px;
    width: 100%;

    max-height: inherit;
    object-fit: contain;
`;
