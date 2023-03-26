import styled from "styled-components"

type Props = {
    isSelected: boolean
}

export const SWrapper = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 15vh;
    width: 50vw;
    background: ${(props) => (props.isSelected ? "rgba(150,150,150, 0.5)" : "rgba(30,30,30,0.5)")};
`
