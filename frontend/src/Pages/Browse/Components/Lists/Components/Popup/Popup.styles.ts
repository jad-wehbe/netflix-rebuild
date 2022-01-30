import styled from "styled-components";

interface IPopup {
    display: boolean
}

export const PopUp = styled.div<IPopup>`
    display: ${(props) => props.display ? 'block' : 'none' };
    position: fixed;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 90vh;
    width: 90%;
    background-color: #090909;
    border-radius: 10px;
    color:white
`