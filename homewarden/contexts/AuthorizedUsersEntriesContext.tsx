import { createContext, Context, useState, PropsWithChildren } from 'react';

import { AuthorizedUserEntry, AuthorizedUserEntryContextType } from '../types/EntriesTypes';

const AuthorizedUsersEntriesContext: Context<AuthorizedUserEntryContextType | null> = createContext<AuthorizedUserEntryContextType | null>(null);

export function AuthorizedUsersEntriesContextProvider({ children }: PropsWithChildren) {
    const [authorizedUsersEntries, setAuthorizedUsersEntries] = useState<AuthorizedUserEntry[]>([]);
    return (
        <AuthorizedUsersEntriesContext.Provider value={{ authorizedUsersEntries, setAuthorizedUsersEntries }}>
            {children}
        </AuthorizedUsersEntriesContext.Provider>
    );
}

export default AuthorizedUsersEntriesContext;
