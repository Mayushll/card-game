import { useEffect, useState } from "react"

export const useAnimation = <T>(data: T, timer: number): [boolean, T] => {
    const [animation, setAnimation] = useState(false)
    const [newItem, setNewItem] = useState<T>(data)

    useEffect(() => {
        setAnimation(false)
        setTimeout(() => {
            setNewItem(data)
            setAnimation(true)
        }, timer)
    }, [data])

    return [animation, newItem]
}
