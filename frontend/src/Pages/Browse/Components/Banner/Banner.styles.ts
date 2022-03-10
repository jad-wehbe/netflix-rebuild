import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    position: relative;

    @media (max-width: 768px) {
        height: 100%;
        display: flex;
        position: static;
        flex-direction: column-reverse;
    }
`;
export const Banner = styled.div`
    position: absolute;
    width: 55%;
    color: white;
    height: 100%;
    padding-left: 8%;
    background: linear-gradient(
        89.99deg,
        #0b0b0b 0.01%,
        #0b0b0b 60.99%,
        rgba(3, 3, 3, 0.6) 80.73%,
        rgba(0, 0, 0, 0) 99.99%
    );

    @media (max-width: 768px) {
        position: static;
        width: 100%;
        background: none;
        padding-left: 0;
    }
`;

export const BannerContainer = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        background: none;
        align-items: center;
    }
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 800;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
`;

export const List = styled.ul`
    list-style: none;

    @media (max-width: 1024px) {
        margin-left: 1rem;
    }
`;

export const ListItem = styled.li`
    display: inline-block;
    padding-right: 2rem;
    font-size: 1rem;
    color: #b2b2b2;

    @media (max-width: 1024px) {
        padding-right: 1rem;
        font-size: 0.9rem;
    }
`;

export const Overview = styled.p`
    color: #b2b2b2;
    text-align: justify;

    @media (max-width: 1024px) {
        width: 90%;
        margin: 2rem 0;
        font-size: 0.9rem;
    }
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

export const Button = styled.button`
    width: 80%;
    max-width: 600px;

    cursor: pointer;
    color: #b2b2b2;
    font-size: 1rem;
    box-sizing: border-box;
    border: 2px solid #b2b2b2;
    border-radius: 100px;
    background-color: transparent;
    padding: 1rem 4rem;

    @media (max-width: 1280px) {
        width: 80%;
        margin-bottom: 1rem;
    }
`;
interface path {
    backdrop_path: string;
    poster_path: string;
}

export const Poster = styled.div<path>`
    height: 100%;
    width: 70%;
    float: right;
    background-image: url(${(props) => props.backdrop_path || ""});
    background-color: grey;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: contain;

    @media (max-width: 768px) {
        position: static;
        min-height: 300px;
        width: 100%;
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
        z-index: -10;
        margin-bottom: -50px;
    }
`;
