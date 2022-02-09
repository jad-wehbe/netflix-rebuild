import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`;

interface MaskProps {
    blur: boolean;
}
export const Mask = styled.div<MaskProps>`
    filter: blur(${(props) => (props.blur ? 10 : 0)}px);
`;

