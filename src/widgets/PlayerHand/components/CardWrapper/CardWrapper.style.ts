import styled from "styled-components"

interface Props {
    isOnBoard: boolean
    isYourTurn: boolean
}

export const StyledCard = styled.div<Props>`
    margin: 10px;
    height: 14vh;
    border-radius: 5px;
    opacity: 1;
    overflow: hidden;
    aspect-ratio: 0.68;
    filter: ${(props) => (props.isOnBoard ? "brightness(0.5);" : "none")};
    user-select: none;
    /*  &:hover{
    transition: all 0.5s;
    filter: ${(props) => (props.isOnBoard || !props.isYourTurn ? "none" : "brightness(0.9)")};;
  }*/
`
