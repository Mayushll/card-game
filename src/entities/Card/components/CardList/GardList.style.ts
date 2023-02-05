import styled from "styled-components"

export const SAnimationWrapper = styled.div`
    &.card-enter {
        opacity: 0;
        width: 0;
    }
    &.card-enter-active {
        opacity: 1;
        width: 100%;
        transition: all 200ms ease-in;
    }
    &.card-exit {
        opacity: 1;
        width: calc(14vh * 0.68);
    }
    &.card-exit-active {
        opacity: 0;
        width: 0;
        transition: all 200ms ease-in;
    }
`
