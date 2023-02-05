import { useDispatch } from "react-redux"
import { changePreview } from "entities/Card"
import { TCardInBattle, TCardInHand } from "entities/Card/types/types"

type changePreviewFunc = (card: TCardInBattle | TCardInHand | null) => void

export function useChangePreview(): changePreviewFunc {
    const dispatch = useDispatch()
    return (card: TCardInBattle | TCardInHand | null): void => {
        let value = card ? card.name : null
        dispatch(changePreview(value))
    }
}
