import styled from "styled-components"

export const SWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
`

interface Props {
    isOpen: boolean
}

export const SSettingsIcon = styled.img<Props>`
    position: relative;
    width: 50px;
    margin-top: 25px;
    margin-left: 25px;
    z-index: 9999;
    cursor: pointer;
    transition: all 1s;
    transform: rotate(${(props) => (props.isOpen ? "0" : "90deg")});
`
