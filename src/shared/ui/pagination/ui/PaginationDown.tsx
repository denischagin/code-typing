import { PaginationItem, PaginationPanel, usePagination } from "@shared/ui/pagination"

export const PaginationDown = () => {
    const { onChangePage, page, isDisabled } = usePagination()

    const disabledItems = page === 0

    const handleFirstPage = () => {
        if (!disabledItems) onChangePage(0)
    }

    const handlePrevPage = () => {
        if (!disabledItems) onChangePage(page - 1)
    }

    const downItems = [
        { text: "i = 0", handler: handleFirstPage },
        { text: "--i", handler: handlePrevPage }
    ]

    return (
        <PaginationPanel>
            {downItems.map(({ text, handler }, index) => (
                <PaginationItem
                    key={text}
                    px="30px"
                    borderRadius={0}
                    borderLeft={"1px solid"}
                    borderColor={index !== 0 ? "main.500" : "transparent"}
                    onClick={handler}
                    isDisabled={disabledItems || isDisabled}
                >
                    {text}
                </PaginationItem>
            ))}
        </PaginationPanel>
    )
}
