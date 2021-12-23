import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    position: relative;

    @media (max-width: 768px) {
        height:100%;
        display:flex;
        position:static;
        flex-direction:column-reverse;
    }
`;
export const Banner = styled.div`
    position: absolute;
    width: 55%;
    color: white;
    height: 100%;
    padding-left: 10%;
    background: linear-gradient(
        89.99deg,
        #0b0b0b 0.01%,
        #0b0b0b 60.99%,
        rgba(3, 3, 3, 0.6) 80.73%,
        rgba(0, 0, 0, 0) 99.99%
    );

    @media (max-width: 768px) {
        position:static;
        width:100%;
        background:none;
        padding-left:0;
    }
`;

export const BannerContainer = styled.div`
    height: 100%;
    width: 60%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 768px) {
        width:100%;
        background:none;
    }
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 800;

    @media (max-width: 1280px) {
        font-size: 3rem;
    }

    @media (max-width: 1024px) {
        font-size: 2rem;
        font-weight:bold;
        text-decoration:underline;
        margin: 1rem;
    }
`;

export const List = styled.ul`
    list-style: none;

    @media (max-width: 1024px) {
        margin-left:1rem;
    }
`;

export const ListItem = styled.li`
    display: inline-block;
    padding-right: 2rem;
    padding-bottom: 1rem;
    font-size: 1rem;
    color: #b2b2b2;

    @media (max-width: 1024px) {
        padding-right:1rem;
    }
`;

export const Overview = styled.p`
    color: #b2b2b2;

    @media (max-width: 1024px) {
        width:90%;
        margin-left:1rem;
        margin-bottom:2rem;
    }
`;

export const ButtonContainer = styled.div`
    @media (max-width: 1024px) {
        margin-left: 1rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center
    }
`;

export const Button = styled.button`
    cursor: pointer;
    color: #b2b2b2;
    font-size:1rem;
    box-sizing: border-box;
    border: 2px solid #b2b2b2;
    border-radius: 100px;
    background-color: transparent;
    padding: 1rem 4rem;
    margin-right: 2rem;

    @media (max-width: 1280px) {
        flex:1;
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: contain;

    @media (max-width: 768px) {
        position:static;
        min-height:300px;
        width:100%;
    }
`;
