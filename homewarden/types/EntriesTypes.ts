type AuthorizedUserEntry = {
    id: string;
    authorizedUserId: string;
    capturedImage: string;
    createdAt: string;
};

type AuthorizedUserEntryContextType = {
    authorizedUsersEntries: AuthorizedUserEntry[];
    setAuthorizedUsersEntries: React.Dispatch<React.SetStateAction<AuthorizedUserEntry[]>>;
};

export type { AuthorizedUserEntry, AuthorizedUserEntryContextType };
