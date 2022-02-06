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

export const Title = styled.h1``;

export const List = styled.ul`
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
    color: #b2b2b2;
`;

export const Span = styled.span``;

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
