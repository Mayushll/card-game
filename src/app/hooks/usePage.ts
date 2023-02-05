import { setPage } from "widgets/StartMenu/state/state"
import { TPage } from "widgets/StartMenu/types/types"
import { useTDispatch } from "app/store"

export function usePage() {
    const dispatch = useTDispatch()

    function changePage(id: TPage) {
        dispatch(setPage(id))
    }

    return { changePage }
}
