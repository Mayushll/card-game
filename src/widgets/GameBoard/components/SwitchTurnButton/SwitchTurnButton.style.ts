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
    padding: 5px;
    cursor: pointer;
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
    color: hsl(var(--white));
    background-color: hsl(var(--darkGray));
    transform: ${(props) => (props.activePlayer === 1 ? "rotateX(180deg)" : "rotateX(0deg)")};
`
export const SFront = styled.button<Props>`
    ${sharedStyle};
    color: hsl(var(--darkGray));
    background-color: hsl(var(--white));
    transform: ${(props) => (props.activePlayer === 1 ? "rotateX(0deg)" : "rotateX(-180deg)")};
`
