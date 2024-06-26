import { RefObject, useRef } from "react"

import { ScrollHandlers } from "@shared/libs/hooks/scroll-into-view"

export const useScrollIntoView = <
    ScrollElement extends HTMLElement,
    ScrollElementParent extends HTMLElement = ScrollElement
>(
    indentTop: number = 0,
    indentLeft: number = 0
): [
    scrollRef: RefObject<ScrollElement>,
    scrollRefParent: RefObject<ScrollElementParent>,
    scrollHandlers: ScrollHandlers
] => {
    const scrollRef = useRef<ScrollElement>(null)
    const scrollRefParent = useRef<ScrollElementParent>(null)

    const scrollIntoView = (behavior: ScrollBehavior = "smooth") => {
        if (!scrollRef.current || !scrollRefParent.current) return

        const parentRect = scrollRefParent.current.getBoundingClientRect()
        const childRect = scrollRef.current.getBoundingClientRect()

        const topOffset =
            childRect.top - parentRect.top + scrollRefParent.current.scrollTop + indentTop
        const leftOffset =
            childRect.left - parentRect.left + scrollRefParent.current.scrollLeft + indentLeft

        scrollRefParent.current.scroll({
            top: topOffset,
            left: leftOffset,
            behavior
        })
    }

    const scrollTo = (options?: ScrollToOptions, callback?: () => void) => {
        if (!scrollRefParent.current) return

        if (callback) {
            const handleScrollEnd = () => {
                const scrollLeft = scrollRefParent.current?.scrollLeft
                const scrollTop = scrollRefParent.current?.scrollTop

                if (
                    (options?.left !== undefined &&
                        options.top !== undefined &&
                        scrollTop === options?.top &&
                        scrollLeft === options?.left) ||
                    (options?.top !== undefined &&
                        options?.left === undefined &&
                        scrollTop === options.top) ||
                    (options?.top === undefined &&
                        options?.left !== undefined &&
                        scrollLeft === options.left)
                ) {
                    callback()
                    scrollRefParent.current?.removeEventListener("scroll", handleScrollEnd)
                }
            }

            scrollRefParent.current.addEventListener("scroll", handleScrollEnd)
        }

        scrollRefParent.current.scrollTo(options)
    }

    return [scrollRef, scrollRefParent, { scrollIntoView, scrollTo }]
}
