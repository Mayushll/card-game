import styled from "styled-components"

interface Props {
    isOpen: boolean
}

export const SOutline = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100vh;
    width: 100vw;
`

export const SWrapper = styled.div<Props>`
    position: absolute;
    z-index: 999;
    left: 0;
    top: 0;
    height: 100vh;
    width: 40vw;
    padding: 100px 25px;
    background: rgb(53, 50, 48, 0.8);

    &.settings-enter {
        left: ${(props) => (props.isOpen ? "-1000px" : "unset")};
        opacity: 0;
    }

    &.settings-enter-active {
        left: ${(props) => (props.isOpen ? "0px" : "unset")};
        opacity: 1;
        transition: all 500ms;
    }

    &.settings-exit {
        opacity: 1;
    }

    &.settings-exit-active {
        opacity: 0;
        transition: all 500ms;
    }
`
