import styled from "styled-components"

export const SWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    grid-area: r;
    & > div {
        height: 50%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const SAnimation = styled.div`
    display: flex;
    position: relative;
    &.fade-enter {
        opacity: 0;
        right: -30vw;
    }
    &.fade-exit {
        opacity: 1;
        right: 0;
    }
    &.fade-enter-active {
        opacity: 1;
        right: 0;
    }
    &.fade-exit-active {
        opacity: 0;
        right: 0;
    }
    &.fade-enter-active,
    &.fade-exit-active {
        transition: all 150ms;
    }
`
export const SAbilitiesWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`
