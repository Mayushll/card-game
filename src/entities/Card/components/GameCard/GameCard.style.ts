import styled from "styled-components"

export const SWrapper = styled.div`
    position: relative;
    align-items: center;

    cursor: pointer;
    overflow: hidden;
    user-select: none;
`

export const SIcon = styled.img`
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 2;

    width: 22%;
`
export const SCardPicture = styled.img`
    position: relative;

    aspect-ratio: 0.68;
    width: 100%;
    height: 100%;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: darkgray;

    cursor: pointer;
`
