import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { TUltimate, setUltimateScreen } from "entities/Ultimate/state/state"
import { useTSelector } from "app/store"

export const useUltimateAnimation = (id: number) => {
    const dispatch = useDispatch()
    const ultimate = useTSelector((state) => state.ultimate.ultimates).find((ultimate: TUltimate) => ultimate.player_id === id)
    let pictureSrc = null
    if (ultimate?.name) {
        pictureSrc = require(`assets/characters/${ultimate?.name}/ultimate-picture.webp`)
    }
    useEffect(() => {
        const timeout = setTimeout(() => dispatch(setUltimateScreen({ player_id: ultimate?.player_id, visible: false, name: ultimate?.name })), 1500)
        return () => {
            clearTimeout(timeout)
        }
    }, [ultimate?.visible])
    return { ultimate, pictureSrc }
}
