import styled from "styled-components"

export const SMenu = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    perspective: 500px;
`

export const SButton = styled.button`
    cursor: pointer;
    position: relative;
    transform: rotateY(-15deg) rotateZ(1deg);
    max-height: fit-content;
    font-size: 1.5vw;
    height: 100px;
    width: 300px;
    color: hsl(var(--black));
    margin-top: 15px;
    margin-left: 25vw;
    padding: 5px 10px;
    border-radius: 5px;
    border-width: 0;
    background: hsl(var(--white));
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 0.2s;
    &:hover {
        filter: brightness(0.8);
    }
`
