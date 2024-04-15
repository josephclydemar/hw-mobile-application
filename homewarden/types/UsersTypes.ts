enum EnumAuthorizedUsersManipulate {
    AddNewAuthorizedUser,
    RemoveAuthorizedUser,
}

type AuthorizedUser = {
    id: string;
    name: string;
    createdAt: string;
};

type AuthorizedUsersManipulateAction = {
    id: string;
    actionType: EnumAuthorizedUsersManipulate;
};

type AuthorizedUserContextType = {
    authorizedUsers: AuthorizedUser[];
    setAuthorizedUsers: React.Dispatch<React.SetStateAction<AuthorizedUser[]>>;
};

export { EnumAuthorizedUsersManipulate };
export type { AuthorizedUser, AuthorizedUsersManipulateAction, AuthorizedUserContextType };
