import React from 'react';

enum EnumAuthorizedUsersManipulate {
    AddNewAuthorizedUser,
    RemoveAuthorizedUser,
}

type AuthorizedUser = {
    id: string;
    profileImage: string | null | undefined;
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

type SelectedAuthorizedUser = {
    id: string;
    profileImage: string | null | undefined;
    name: string;
    createdAt: string;
};

type SelectedAuthorizedUserContextType = {
    selectedAuthorizedUser: SelectedAuthorizedUser;
    setSelectedAuthorizedUser: React.Dispatch<React.SetStateAction<SelectedAuthorizedUser>>;
};

type ToAddNewAuthorizedUserContextType = {
    inputName: string;
    setInputName: React.Dispatch<React.SetStateAction<string>>;
    confirmAdd: boolean;
    setConfirmAdd: React.Dispatch<React.SetStateAction<boolean>>;
};

export { EnumAuthorizedUsersManipulate };
export type {
    AuthorizedUser,
    AuthorizedUsersManipulateAction,
    AuthorizedUserContextType,
    SelectedAuthorizedUser,
    SelectedAuthorizedUserContextType,
    ToAddNewAuthorizedUserContextType,
};
