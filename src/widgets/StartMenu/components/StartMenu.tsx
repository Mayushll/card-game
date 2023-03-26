import { usePage } from "app/hooks/usePage"
import { SButton, SMenu } from "./StartMenu.style"

interface Props {
    start: () => void
}
export const StartMenu = ({ start }: Props) => {
    const { changePage } = usePage()
    return (
        <SMenu>
            <SButton onClick={start}>Тестовый режим</SButton>
            <SButton onClick={() => changePage("storage")}>Склад</SButton>
            <SButton onClick={() => changePage("faq")}>Справочник</SButton>
        </SMenu>
    )
}
