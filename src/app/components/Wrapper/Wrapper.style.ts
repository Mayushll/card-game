import styled from "styled-components"

export const SWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`
export const SImage = styled.img`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -10;
    object-fit: cover;
    filter: blur(10px) brightness(0.7);
`
export const SAnimation = styled.div`
    &.fade-enter {
        opacity: 0;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-enter-active {
        opacity: 1;
    }
    &.fade-exit-active {
        opacity: 0;
    }
    &.fade-enter-active,
    &.fade-exit-active {
        transition: opacity 250ms;
    }
`
