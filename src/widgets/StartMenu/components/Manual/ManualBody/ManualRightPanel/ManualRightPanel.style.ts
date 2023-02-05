import styled from "styled-components"

export const SWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    grid-area: r;
    & div {
        height: 50%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`
