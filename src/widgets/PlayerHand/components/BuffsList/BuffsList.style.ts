import Tooltip from "rc-tooltip"
import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    position: absolute;
    height: 100%;
    padding: 1vw;
    left: 5vw;
`
export const STooltip = styled(Tooltip)`
    transition: all 1s; !important;
`

export const BuffIcon = styled.img`
    height: 30px;
`
