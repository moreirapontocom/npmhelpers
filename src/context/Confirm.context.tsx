import { createContext, useState } from "react";

interface Confirm {
    type: string | undefined,
    title: string
    message: string
    messageLine2?: undefined,
    buttonLabel: string
    onConfirm?: Function | undefined
}

const emptyConfirm: Confirm = {
    type: undefined,
    title: "Are you sure?",
    message: "",
    messageLine2: undefined,
    buttonLabel: "Confirm",
    onConfirm: undefined,
};

export const ConfirmContext = createContext(emptyConfirm as any);

export const ConfirmProvider = ({ children }: any) => {
    const [confirm, setConfirm] = useState(emptyConfirm as Confirm);

    const onConfirm = (response: any) => {
        if (confirm.onConfirm) {
            confirm.onConfirm(response);
        }
    };

    return <ConfirmContext.Provider value={{confirm, setConfirm, onConfirm}}>{children}</ConfirmContext.Provider>
};