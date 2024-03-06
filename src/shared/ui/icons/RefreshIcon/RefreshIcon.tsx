import {Image} from "@chakra-ui/react";

import RefreshIconImg from "@shared/assets/refresh.svg"
import {RefreshIconProps} from "@shared/ui/icons";

export const RefreshIcon = (props: RefreshIconProps) => {
    return (
        <Image w="20px" h="20px" {...props} src={RefreshIconImg}/>
    )
}