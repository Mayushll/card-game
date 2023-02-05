import { RefObject, useEffect, useState } from "react"

export function useGetWrapperSize(wrapperRef: RefObject<HTMLDivElement>) {
    const [size, setSize] = useState<{ height: number; width: number }>({ height: 0, width: 0 })
    useEffect(() => {
        function changeSize() {
            console.log(wrapperRef.current)
            if (wrapperRef.current) {
                let { height, width } = wrapperRef.current.getBoundingClientRect()
                console.log(height, width)
                setSize({ height: height, width: width })
            }
        }
        changeSize()
        window.addEventListener("resize", changeSize)
        return () => {
            window.removeEventListener("resize", changeSize)
        }
    }, [])
    return size
}
