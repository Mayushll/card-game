import { TPage } from "widgets/StartMenu/types/types"
import { setPage } from "pages/Profile"
import { useTDispatch } from "app/store"

export function usePage() {
    const dispatch = useTDispatch()

    function changePage(id: TPage) {
        dispatch(setPage(id))
    }

    return { changePage }
}
