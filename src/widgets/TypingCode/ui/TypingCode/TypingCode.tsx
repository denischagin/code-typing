import {PrintingInput, PrintingRow, PrintingRowProps} from "@entities/text";
import {
    getPrintingRowStatus,
    TypingCodeResultRows,
    useCurrentRow,
    useRandomCode,
    useTypingCodeHandlers
} from "@widgets/TypingCode";
import {Box, Text} from "@chakra-ui/react";

export const TypingCode = () => {
    const endIndent = 2

    const {
        handleChangePrintingInput,
        handleNewText,
        handleKeyDown,
        isEnded,
        containerRef,
        resultRef,
    } = useTypingCodeHandlers()

    const {rows, randomText} = useRandomCode()

    const {currentRowIndex, typingValue} = useCurrentRow()

    const getPrintingRowProps = (row: string, rowIndex: number): PrintingRowProps => {
        const status = getPrintingRowStatus(rowIndex, currentRowIndex)
        const isActive = status === "active"

        return {
            index: rowIndex,
            text: row,
            endIndent: endIndent,
            status,
            typingValue: isActive ? typingValue : null,
            printingInput: status === 'active' && !isEnded ? (
                <PrintingInput
                    typingValue={typingValue}
                    isRightRow={row.startsWith(typingValue)}
                    handleKeyDown={handleKeyDown}
                    onChange={handleChangePrintingInput}
                    maxLength={row.length + 1}
                />
            ) : null
        }
    }

    return (
        <Box h="100%" overflowY="scroll" ref={containerRef} mr="4px" pr="4px">
            {!randomText && (
                <Text>
                    Пока еще нет текстов
                </Text>
            )}

            {rows?.map((row, rowIndex) => (
                <PrintingRow key={rowIndex} {...getPrintingRowProps(row, rowIndex)} />
            ))}
            {isEnded && (
                <TypingCodeResultRows onNewText={() => {
                    handleNewText()
                }} ref={resultRef} startIndex={rows?.length ?? 0}/>
            )}
        </Box>
    )
}