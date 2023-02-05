type Props = {
    id?: number
    checked: boolean
    handler: () => void
}

export const CheckboxInput = ({ id, checked, handler }: Props) => {
    return (
        <>
            <input type="checkbox" id={`${id}`} checked={checked} onChange={handler} />
            <label htmlFor={`${id}`}>
                <svg viewBox="0,0,50,50">
                    <path d="M5 30 L 20 45 L 45 5"></path>
                </svg>
            </label>
        </>
    )
}
