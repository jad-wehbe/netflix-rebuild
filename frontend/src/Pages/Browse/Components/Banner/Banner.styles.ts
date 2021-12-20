import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    position: relative;
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
`;

export const BannerContainer = styled.div`
    height: 100%;
    width: 60%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 800;
    /* padding: 3rem 0 4rem 0; */
`;

export const List = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    display: inline-block;
    padding-right: 2rem;
    font-size: 1rem;
    color: #b2b2b2;
    /* margin: 3rem 0 2rem 0   ; */
`;

export const Overview = styled.p`
    color: #b2b2b2;
    /* margin-bottom: 3rem; */
`;

export const ButtonContainer = styled.div``;

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
`;
interface path {
    path: string;
}

export const Poster = styled.div<path>`
    height: 100%;
    width: 70%;
    float: right;
    background-image: url(${(props) => props.path || ""});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: contain;
`;
