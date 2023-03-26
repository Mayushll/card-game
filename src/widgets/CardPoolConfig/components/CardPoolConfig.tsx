import { CardsSelector } from "widgets/CardPoolConfig/components/CardsSelector"
import { usePage } from "app/hooks/usePage"
import { PlayerMenuWrapper } from "./CardPoolConfig.style"

export const CardPoolConfig = () => {
    const { changePage } = usePage()
    return (
        <PlayerMenuWrapper>
            <div style={{ color: "hsl(var(--white))", fontSize: "25px", padding: "5px" }}>Пул карт</div>
            <CardsSelector isSelected={false} />
            <CardsSelector isSelected={true} />
            <button style={{ color: "hsl(var(--black))" }} onClick={() => changePage("start")}>
                Выхот
            </button>
        </PlayerMenuWrapper>
    )
}
