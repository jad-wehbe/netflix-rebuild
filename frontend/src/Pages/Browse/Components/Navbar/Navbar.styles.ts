import styled from "styled-components";

// Nav
export const Nav = styled.nav`
    width: 100%;
    @media (max-width: 768px) {
        position: fixed;
        width: 100%;
        margin: 0;
        background: linear-gradient(rgba(1, 1, 1, 0.7), rgba(1, 1, 1, 0));
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 5%;
    padding: 30px 0;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 116px;
    height: 34px;

    @media (max-width: 768px) {
        width: 100px;
        height: 30px;
    }
`;

interface isOpen {
    isOpen: boolean;
}

export const Dropdown = styled.div<isOpen>`
    position: absolute;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    margin-top: 15px;
    right: 10px;
    width: 300px;
    height: 200px;
    padding: 20px 0 0 20px;
    background-color: #1f1f1f;
    z-index: 10;
    color: #b2b2b2b2;
`;
export const P = styled.p`
    margin-bottom: 1rem;
`;
export const A = styled.a`
    display: inline-block;
    margin-top: 5rem;
    text-decoration: underline;
    color: #b2b2b2b2;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: #ddd;
    }
`;

export const Profile = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    background-color: lightgrey;
    border-radius: 100%;
`;

export const DownArrow = styled.img``;
