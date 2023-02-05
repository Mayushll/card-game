import styled from "styled-components"

interface Props {
    color: string | undefined
}
export const SWrapper = styled.div`
    overflow: hidden;
    position: relative;
`

export const SShield = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    pointer-events: none;
    border-top: 15vh solid rgba(255, 215, 0, 0.2);
    border-right: 15vh solid transparent;
    z-index: 1;
    overflow: hidden;
    &.shield-enter {
        top: -300px;
        left: -300px;
        opacity: 0;
    }
    &.shield-enter-active {
        top: 0;
        left: 0;
        opacity: 1;
        transition: all 500ms;
    }
    &.shield-exit {
        opacity: 1;
    }
    &.shield-exit-active {
        opacity: 0;
        transition: all 500ms;
    }
`
