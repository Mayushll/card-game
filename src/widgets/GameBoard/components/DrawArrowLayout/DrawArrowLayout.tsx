import { RefObject, useRef } from "react"
import { SArrowLayout, useDrawArrow, useGetWrapperSize } from "."

interface Props {
    wrapper: RefObject<HTMLDivElement>
}

export const DrawArrowLayout = ({ wrapper }: Props) => {
    const ref = useRef(null)
    const size = useGetWrapperSize(wrapper)

    useDrawArrow({ ref })

    return <SArrowLayout width={size.width + "px"} height={size.height + "px"} ref={ref} />
}
