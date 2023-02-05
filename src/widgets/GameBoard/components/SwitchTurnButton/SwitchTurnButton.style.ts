import styled, { css } from "styled-components"

export const StyledWrapper = styled.div`
    position: fixed;
    top: 50%;
    right: 15vw;
    transform: translateY(-50%);
`

interface Props {
    activePlayer: number
}

export const S3D = styled.div`
    position: relative;
`
const sharedStyle = css`
    font-size: 1vw;
    color: ghostwhite;
    user-select: none;
    width: 12vw;
    border-radius: 15px;
    position: absolute;
    transition: transform 0.6s linear;
    overflow: hidden;
    backface-visibility: hidden;
`
export const SBack = styled.button<Props>`
    ${sharedStyle};
    cursor: pointer;
    color: hsl(var(--white));
    background-color: hsl(var(--darkGray));
    padding: 5px;
    transform: ${(props) => (props.activePlayer === 1 ? "rotateX(180deg)" : "rotateX(0deg)")};
`
export const SFront = styled.button<Props>`
    ${sharedStyle};
    color: hsl(var(--darkGray));
    cursor: pointer;
    background-color: hsl(var(--white));
    padding: 5px;
    transform: ${(props) => (props.activePlayer === 1 ? "rotateX(0deg)" : "rotateX(-180deg)")};
`
