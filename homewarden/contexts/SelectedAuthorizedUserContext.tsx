import { Context, createContext, useState, PropsWithChildren } from 'react';

import { SelectedAuthorizedUser, SelectedAuthorizedUserContextType } from '../types/UsersTypes';

const SelectedAuthorizedUserContext: Context<SelectedAuthorizedUserContextType | null> = createContext<SelectedAuthorizedUserContextType | null>(null);

export function SelectedAuthorizedUserContextProvider({ children }: PropsWithChildren) {
    const [selectedAuthorizedUser, setSelectedAuthorizedUser] = useState<SelectedAuthorizedUser>({
        id: '',
        name: '',
        profileImage: '',
        createdAt: '',
    });
    return (
        <SelectedAuthorizedUserContext.Provider value={{ selectedAuthorizedUser, setSelectedAuthorizedUser }}>
            {children}
        </SelectedAuthorizedUserContext.Provider>
    );
}

export default SelectedAuthorizedUserContext;
