
import styled from "styled-components";

// Header
export const Header = styled.div`
    margin: 0 5%;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 116px;
    height: 34px;

    @media (max-width: 700px) {
        width: 100px;
        height: 30px;
    }
`;

export const Search = styled.input`
    border: 2px solid rgb(80,80,80);
    border-radius: 20px;
    width: 350px;
    padding: 10px 20px;
    background-color: #000;
    color: #AAA;
    font-size: 1rem;
`
interface isOpen {
    isOpen: boolean
}

export const Dropdown = styled.div<isOpen>`
    position:absolute;
    display: ${(props) => props.isOpen ? 'block' : 'none'};
    margin-top: 15px;
    right:10px;
    width: 300px;
    height: 200px;
    padding: 20px 0 0 20px;
    background-color: #1F1F1F;
    z-index: 10;
    color: #B2b2b2b2;
`
export const P = styled.p`
    margin-bottom: 1rem;
`
export const A = styled.a`
    display: inline-block;
    margin-top:5rem;
    text-decoration:underline;
    color: #B2b2b2b2;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: #DDD;
    }
`

export const Profile = styled.button`
    background:none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items:center;
    gap: 0.8rem;

`

export const Avatar = styled.div`
    width:40px;
    height:40px;
    background-color: lightgrey;
    border-radius:100%
`

export const DownArrow = styled.img``