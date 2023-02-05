import styled from "styled-components"

interface Props {
    size: string
    outlineColor?: string
}
export const SLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    color: hsl(var(--white));
    fill: hsl(var(--white));
`
export const SLabel = styled.label`
    margin-right: 15px;
    font-size: 18px;
    cursor: pointer;
    color: hsl(var(--white));
    fill: hsl(var(--white));
`

export const SWrapper = styled.div<Props>`
    margin-bottom: 15px;

    & input {
        position: absolute;
        opacity: 0;
    }

    & input:checked + label svg path {
        stroke-dashoffset: 0;
    }

    & input:focus + label {
        transform: scale(1.03);
    }

    & input + label {
        display: block;
        border: 2px solid ${(props) => props.outlineColor ?? "hsl(var(--white))"};
        width: ${(props) => props.size};
        height: ${(props) => props.size};
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    & input + label:active {
        transform: scale(1.05);
        border-radius: 12px;
    }

    & input + label svg {
        pointer-events: none;
        padding: 5%;
    }

    & input + label svg path {
        fill: none;
        stroke: hsl(var(--white));
        stroke-width: 4px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 100;
        stroke-dashoffset: 101;
        transition: all 250ms cubic-bezier(1, 0, 0.37, 0.91);
    }
`
