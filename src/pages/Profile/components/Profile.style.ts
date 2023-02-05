import styled from "styled-components"

export const SAnimation = styled.div`
    display: flex;
    height: 100vh;

    align-items: center;
    justify-content: center;
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
