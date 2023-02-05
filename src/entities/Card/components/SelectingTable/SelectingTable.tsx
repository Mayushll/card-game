import { TCardInfo } from "entities/Card/types/types"
import { SSelectingSquare, SSelectingTable } from "./SelectingTable.style"

interface Props {
    rows: number
    columns: number
    cards: TCardInfo[]
    onClick: any
    selectedItem: string
}

export const SelectingTable = ({ rows, columns, cards, onClick, selectedItem }: Props) => {
    return (
        <SSelectingTable rows={rows} columns={columns}>
            {cards.map((card: TCardInfo) => (
                <SSelectingSquare isSelected={selectedItem === card.name}>
                    <img draggable={"false"} src={require(`assets/characters/${card.name}/icon.webp`)} alt={card.name} onClick={() => onClick(card.name)} />
                </SSelectingSquare>
            ))}
        </SSelectingTable>
    )
}
