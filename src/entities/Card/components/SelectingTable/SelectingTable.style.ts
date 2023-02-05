import styled from "styled-components"

interface SSelectingTableProps {
    rows: number
    columns: number
}

export const SSelectingTable = styled.div<SSelectingTableProps>`
    display: grid;
    grid-gap: 0.5vw;
    background: hsla(var(--darkGray), 0.5);
    border: 2px solid hsl(var(--black));
    width: calc(5vw * ${(props) => props.columns});
    height: calc(5vw * ${(props) => props.rows});
    grid-template-rows: ${(props) => `repeat( ${props.rows}, 1fr)`};
    grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
`

interface SSelectingSquareProps {
    isSelected: boolean
}

export const SSelectingSquare = styled.div<SSelectingSquareProps>`
    transition: all 0.1s;
    cursor: pointer;
    filter: ${(props) => (props.isSelected ? "brightness(1.05)" : "none")};
    border: 0.2vw solid hsl(var(${(props) => (props.isSelected ? "--gray" : "--darkGray")}));
    &:hover {
        border-color: hsl(var(--gray));
        filter: brightness(1.05);
    }
`
