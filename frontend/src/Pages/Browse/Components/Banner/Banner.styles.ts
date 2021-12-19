import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: auto auto auto;
`

export const Banner = styled.div`
    color: white;
    object-fit: contain;
    height: 448px;
    /* align-items: center; */
    padding-left: 10%;
`

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 800;
    padding: 3rem 0 4rem 0;
`

export const List = styled.ul`
    list-style:none;
`

export const ListItem = styled.li`
    display: inline-block;
    padding-right: 2rem;
    font-size:1rem;
    color: #b2b2b2;
    margin: 3rem 0 2rem 0   ;
`

export const Overview = styled.p`
    color: #b2b2b2;
    margin-bottom: 3rem;
`

export const ButtonContainer = styled.div`
`

export const Button = styled.button`
    cursor: pointer;
    color:#b2b2b2;
    box-sizing: border-box;
    border: 2px solid #b2b2b2;
    border-radius:100px;
    background-color:transparent;
    padding: 1rem 4rem;
    margin-right: 2rem;
`

export const Poster = styled.img`
    grid-column-start: 2;
    grid-column-end: 3;
    height: 500px;
    object-fit:contain;
`