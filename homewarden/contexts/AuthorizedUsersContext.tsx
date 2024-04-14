import axios from 'axios';
import { createContext, Context, ReactNode, useState, useEffect } from 'react';

import { AuthorizedUser, AuthorizedUserContextType } from '../types/UsersTypes';

type AuthorizedUserContextProviderProps = {
    children: ReactNode;
};

type SuwayRa = {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

const AuthorizedUsersContext: Context<AuthorizedUserContextType | null> = createContext<AuthorizedUserContextType | null>(null);

export function AuthorizedUsersContextProvider({ children }: AuthorizedUserContextProviderProps) {
    const [authorizedUsers, setAuthorizedUsers] = useState<AuthorizedUser[]>([]);
    useEffect(function (): void {
        axios.get('http://192.168.1.2:8500/api/v1/authorized_users').then(function ({ data }): void {
            setAuthorizedUsers(() =>
                data.map(function (item: SuwayRa): AuthorizedUser {
                    return { id: item._id, name: item.name, createdAt: item.createdAt };
                }),
            );
        });
    }, []);
    return <AuthorizedUsersContext.Provider value={{ authorizedUsers, setAuthorizedUsers }}>{children}</AuthorizedUsersContext.Provider>;
}

export default AuthorizedUsersContext;
