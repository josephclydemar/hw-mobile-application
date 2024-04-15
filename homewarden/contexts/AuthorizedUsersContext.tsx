import { createContext, Context, ReactNode, useState } from 'react';

import { AuthorizedUser, AuthorizedUserContextType } from '../types/UsersTypes';

type AuthorizedUserContextProviderProps = {
    children: ReactNode;
};

const AuthorizedUsersContext: Context<AuthorizedUserContextType | null> = createContext<AuthorizedUserContextType | null>(null);

export function AuthorizedUsersContextProvider({ children }: AuthorizedUserContextProviderProps) {
    const [authorizedUsers, setAuthorizedUsers] = useState<AuthorizedUser[]>([]);
    return <AuthorizedUsersContext.Provider value={{ authorizedUsers, setAuthorizedUsers }}>{children}</AuthorizedUsersContext.Provider>;
}

export default AuthorizedUsersContext;
