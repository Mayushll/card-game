import { RefObject, useEffect, useState } from "react"

type TSize = {
    height: number
    width: number
}

export function useGetWrapperSize(wrapperRef: RefObject<HTMLDivElement>) {
    const [size, setSize] = useState<TSize>({ height: 0, width: 0 })
    useEffect(() => {
        function changeSize() {
            if (wrapperRef.current) {
                let { height, width } = wrapperRef.current?.getBoundingClientRect()
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
