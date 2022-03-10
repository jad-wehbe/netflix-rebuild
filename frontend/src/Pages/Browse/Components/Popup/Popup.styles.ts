import styled from "styled-components";

interface IPopup {
    open: boolean;
}

export const Popup = styled.div<IPopup>`
    height: 90vh;
    width: 90%;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: 10;
    display: ${(props) => (props.open ? "block" : "none")};
    background-color: #090909;
    border-radius: 10px;
    color: white;
    overflow: auto;
`;

export const PopupContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 700px;
    position: relative;
`;

export const MovieContainer = styled.div`
    height: 40%;
    min-height: 400px;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
    }
`;

export const Details = styled.div`
    width: 60%;
    max-width: 800px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding: 0;
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin: 1rem 0 2rem 0;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const List = styled.ul`
    margin-left: 1rem;
    list-style: none;
`;

export const ListItem = styled.li`
    display: inline-block;
    padding-right: 2rem;
    padding-bottom: 1rem;
    font-size: 1rem;
    color: #b2b2b2;

    @media (max-width: 1024px) {
        padding-right: 1rem;
        font-size: 0.9rem;
    }
`;
export const Overview = styled.p`
    margin-top: 1rem;
    color: #b2b2b2;
    text-align: justify;

    @media (max-width: 1024px) {
        width: 90%;
        margin: 1rem 0;
        font-size: 0.9rem;
`;

export const Span = styled.span`
    padding-left: 0.6rem;
    font-weight: bold;
    color: #888 !important;
    cursor: pointer;

    &:hover {
        color: #999 !important;
        text-decoration: underline;
    }
`;

export const Box = styled.div`
    margin: 3rem auto;
    background-color: grey;
    width: 70%;
    max-width: 700px;
    height: 400px;

    @media (max-width: 768px) {
        margin: 1rem auto;
        width: 80%;
        height: 30%;
        min-width: 300px;
        min-height: 200px;

        object-fit: contain;
        overflow: hidden;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    padding: 0 0 5px 8px;
    font-size: 1rem;
    font-weight: bold;
    right: 0px;
    top: 0px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: none;
    background: lightGrey;
    border-radius: 0 0 0 100%;
    z-index: 30;
`;

interface path {
    backdrop_path: string;
    poster_path: string;
}

export const Poster = styled.div<path>`
    width: 100%;
    background-image: url(${(props) => props.backdrop_path || ""});
    background-color: #333;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: contain;

    @media (max-width: 768px) {
        height: 250px;
        margin-bottom: -60px;
        z-index: -10;
        background: linear-gradient(
                rgba(0, 0, 0, 0) 30%,
                rgba(3, 3, 3, 0.6) 80%,
                rgba(11, 11, 11, 0.75) 90%
            ),
            url(${(props) => props.backdrop_path || ""});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        object-fit: contain;
    }
`;
