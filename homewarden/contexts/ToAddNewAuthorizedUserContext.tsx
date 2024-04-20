import { ReactNode, Context, createContext, useState } from 'react';
import { ToAddNewAuthorizedUserContextType } from '../types/UsersTypes';

type ToAddNewAuthorizedUserContextProviderProps = {
    children: ReactNode;
};

const ToAddNewAuthorizedUserContext: Context<ToAddNewAuthorizedUserContextType | null> = createContext<ToAddNewAuthorizedUserContextType | null>(null);

export function ToAddNewAuthorizedUserContextProvider({ children }: ToAddNewAuthorizedUserContextProviderProps) {
    const [inputName, setInputName] = useState<string>('');
    const [confirmAdd, setConfirmAdd] = useState<boolean>(false);
    return (
        <ToAddNewAuthorizedUserContext.Provider value={{ inputName, setInputName, confirmAdd, setConfirmAdd }}>
            {children}
        </ToAddNewAuthorizedUserContext.Provider>
    );
}

export default ToAddNewAuthorizedUserContext;
