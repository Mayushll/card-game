import styled from "styled-components"

export const SWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    grid-area: l;
`
export const SPicture = styled.img`
    z-index: 1;
    top: 0;
    right: 0;
    height: 80vh;
    padding-right: 4%;
    overflow: hidden;
    object-fit: contain;
    cursor: pointer;
`
export const SAnimation = styled.div`
    display: flex;
    position: relative;
    &.fade-enter {
        opacity: 0;
        left: -30vw;
    }
    &.fade-exit {
        opacity: 1;
        left: 0;
    }
    &.fade-enter-active {
        opacity: 1;
        left: 0;
    }
    &.fade-exit-active {
        opacity: 0;
        left: 0;
    }
    &.fade-enter-active,
    &.fade-exit-active {
        transition: all 150ms;
    }
`
