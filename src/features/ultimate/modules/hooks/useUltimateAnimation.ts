import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUltimateScreen } from "features/ultimate//modules/state/state"
import { TUltimateSlide } from "features/ultimate//modules/types/types"
import { useTSelector } from "app/store"

export const useUltimateAnimation = (id: number) => {
    const dispatch = useDispatch()
    const ultimate = useTSelector((state) => state.ultimate.ultimates).find((ultimate: TUltimateSlide) => ultimate.player_id === id)
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
