import styled from "styled-components"

interface Props {
    player_id: number | null | undefined
}

export const SImage = styled.img<Props>`
    transform: ${(props) => (props.player_id === 1 ? "translateY(-50%)" : "translateY(-50%) scale(-1, 1)")};
    left: ${(props) => (props.player_id === 1 ? "0px" : "unset")};
    right: ${(props) => (props.player_id === 2 ? "0px" : "unset")};

    position: fixed;
    top: 50%;
    z-index: 999;
    height: 70vh;
    pointer-events: none;
    opacity: 0.9;
    &.ultimate-enter {
        left: ${(props) => (props.player_id === 1 ? "-1000px" : "unset")};
        right: ${(props) => (props.player_id === 2 ? "-1000px" : "unset")};
        opacity: 0;
    }
    &.ultimate-enter-active {
        left: ${(props) => (props.player_id === 1 ? "0px" : "unset")};
        right: ${(props) => (props.player_id === 2 ? "0px" : "unset")};
        opacity: 1;
        transition: all 500ms;
    }
    &.ultimate-exit {
        opacity: 1;
    }
    &.ultimate-exit-active {
        opacity: 0;
        transition: all 500ms;
    }
`
