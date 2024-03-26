import {ModeSmallItemProps} from "@features/select-typing-mode";
import {Tile} from "@shared/ui/tile";

export const ModeSmallItem = (props: ModeSmallItemProps) => {
    const {isActive, ...tileProps} = props

    return (
        <Tile
            bg={isActive ? 'blue.700' : 'transparent'}
            borderWidth='1px'
            _hover={{bg: 'blue.700'}}
            {...tileProps}
        />
    )
}