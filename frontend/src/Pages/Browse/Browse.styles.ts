import styled from "styled-components";

interface IContainer {
    StopScroll: boolean;
}

export const Container = styled.div<IContainer>`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: ${(props) => (props.StopScroll ? "hidden" : "auto")};
`;

interface MaskProps {
    blur: boolean;
}
export const Mask = styled.div<MaskProps>`
    filter: blur(${(props) => (props.blur ? 10 : 0)}px);
`;
