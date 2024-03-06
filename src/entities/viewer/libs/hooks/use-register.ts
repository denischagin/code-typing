import {useToast} from "@chakra-ui/react";

import {useNavigate} from "react-router-dom";

import {TokenService} from "@entities/token";
import {IRegisterCredentials, useViewer, ViewerService} from "@entities/viewer";
import {paths} from "@pages/routes";
import {ApiError} from "@shared/api";
import {useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";

export const useRegister = () => {
    const {loginViewer} = useViewer();
    const toast = useToast()
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (credentials: IRegisterCredentials) => ViewerService.register(credentials),
        onSuccess: ({access}) => {
            loginViewer();
            toast({
                title: "Registration successful",
                status: "success",
            })
            TokenService.setAccessToken(access);
            navigate(paths.typingCodePage, {replace: true});
        },
        onError: (error: AxiosError<ApiError>) => {
            toast({colorScheme: 'red', title: error.response?.data?.message, status: 'error'})
        }
    })
}