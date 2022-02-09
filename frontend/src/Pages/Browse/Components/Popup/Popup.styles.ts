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
`;

export const PopupContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const MovieContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const Details = styled.div`
    width: 60%;
    max-width: 800px;
    padding: 2rem;
`;

export const Title = styled.h1`
    margin: 1rem;
    margin-right: 0rem;
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
`;
export const Overview = styled.p`
    margin-left: 1rem;
    color: #b2b2b2;
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
`;

export const ButtonContainer = styled.div`
    @media (max-width: 1024px) {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    color: #b2b2b2;
    font-size: 1rem;
    box-sizing: border-box;
    border: 2px solid #b2b2b2;
    border-radius: 100px;
    background-color: transparent;
    padding: 1rem 4rem;
    margin-right: 2rem;

    @media (max-width: 1280px) {
        flex: 1;
        width: 80%;
        margin-bottom: 1rem;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    width: 30px;
    cursor: pointer;
    background: none;
    border: 1px solid #b2b2b2;
    color: #b2b2b2;
`;

interface path {
    backdrop_path: string;
    poster_path: string;
}

export const Poster = styled.div<path>`
    height: 300px;
    width: 100%;
    background-image: url(${(props) => props.backdrop_path || ""});
    background-color: #333;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: contain;
`;
