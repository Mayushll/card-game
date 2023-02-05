import { ConnectDropTarget } from "react-dnd"
import styled from "styled-components"

interface StyledProps {
    canDrop: boolean | ConnectDropTarget
    color: string | undefined
    background: string | null
}
export const SWrapper = styled.div<StyledProps>`
    filter: ${(props) => (props.canDrop ? "brightness(1.1);" : "none")};
    position: relative;
    height: 15vh;
    aspect-ratio: 0.68;
    background-color: rgba(100, 100, 100, 0.5);
    box-shadow: ${(props) => (props.color ? `0 0 15px ${props.color}` : `0 0 5px black`)};
    margin: 10px;
    border-color: red;
    border-radius: 5px;
    &::before {
        content: "";
        background-image: ${({ background }) => (background ? `url(${require("assets/shared/coins.webp")})` : "none")};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.3;
    }
`
export const SUltimateIcon = styled.img<StyledProps>`
    position: absolute;
    /*  box-shadow: ${(props) => (props.color ? `0 0 15px ${props.color}` : `0 0 5px black`)};*/
    bottom: 0;
    transform: translateY(50%) translateX(50%);
    right: 50%;
    z-index: 2;
    width: 22%;
`
