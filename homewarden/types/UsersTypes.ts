enum EnumAuthorizedUsersManipulate {
    AddNewAuthorizedUser,
    RemoveAuthorizedUser,
}

type AuthorizedUser = {
    id: string;
    name: string;
    time_registered: string;
    date_registered: string;
};

type AuthorizedUsersManipulateAction = {
    userId: string;
    actionType: EnumAuthorizedUsersManipulate;
};

type AuthorizedUserContextType = {
    authorizedUsers: AuthorizedUser[];
    authorizedUsersDispatch: React.Dispatch<AuthorizedUsersManipulateAction>;
};

export { EnumAuthorizedUsersManipulate };
export type { AuthorizedUser, AuthorizedUsersManipulateAction, AuthorizedUserContextType };
