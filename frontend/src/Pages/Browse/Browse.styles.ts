import styled from "styled-components";

// Header
export const Header = styled.div`
    padding-top: 30px;
    margin: 0 5%;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 116px;
    height: 34px;

    @media (max-width: 700px) {
        width: 100px;
        height: 30px;
    }
`;
