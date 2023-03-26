import { TNames } from "entities/Card"
import { SSelectingSquare, SSelectingTable } from "./SelectingTable.style"

interface Props {
    rows: number
    columns: number
    names: TNames[]
    onClick: any
    selectedItem: string
    page: string
}

export const SelectingTable = ({ rows, columns, names, onClick, selectedItem, page }: Props) => {
    return (
        <SSelectingTable rows={rows} columns={columns}>
            {names.map((name: TNames) => (
                <SSelectingSquare isSelected={selectedItem === name} key={name}>
                    <img draggable={"false"} src={require(`assets/${page}/${name}/icon.webp`)} alt={name} onClick={() => onClick(name)} />
                </SSelectingSquare>
            ))}
        </SSelectingTable>
    )
}
