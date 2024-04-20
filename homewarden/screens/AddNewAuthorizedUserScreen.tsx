import { useContext, Context, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

// types
import { ToAddNewAuthorizedUserContextType } from '../types/UsersTypes';

// contexts
import ToAddNewAuthorizedUserContext from '../contexts/ToAddNewAuthorizedUserContext';
import AuthorizedUsersContext from '../contexts/AuthorizedUsersContext';

import { AuthorizedUser, AuthorizedUserContextType } from '../types/UsersTypes';

import Section from '../components/Section';

export default function AddNewAuthorizedUserScreen() {
    const { setInputName, setConfirmAdd } = useContext<ToAddNewAuthorizedUserContextType>(
        ToAddNewAuthorizedUserContext as Context<ToAddNewAuthorizedUserContextType>,
    );
    const { authorizedUsers } = useContext<AuthorizedUserContextType>(AuthorizedUsersContext as Context<AuthorizedUserContextType>);
    const [recentlyAddedAuthorizedUser, setRecentlyAddedAuthorizedUser] = useState<AuthorizedUser | null>(null);

    useEffect(
        function (): void {
            if (authorizedUsers !== null && authorizedUsers.length > 0) {
                setRecentlyAddedAuthorizedUser(() => authorizedUsers[0]);
            }
        },
        [authorizedUsers],
    );
    return (
        <>
            <Section title="Add New Authorized User">
                <View
                    style={{
                        marginTop: 15,
                    }}>
                    <TextInput
                        placeholder="New Authorized User Name..."
                        onChangeText={function (textData: string): void {
                            setInputName(() => textData);
                        }}
                        style={{
                            borderWidth: 1,
                            borderColor: '#333',
                            fontSize: 15,
                            borderRadius: 10,
                            paddingLeft: 15,
                            marginBottom: 10,
                        }}
                    />
                    <Button
                        title="Confirm Add"
                        color="#505"
                        onPress={function (): void {
                            setConfirmAdd(() => true);
                        }}
                    />
                </View>
            </Section>
            <Section title="Added Authorized User">
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <View>
                        <Image
                            style={{
                                width: 200,
                                height: 200,
                                borderRadius: 100,
                                resizeMode: 'contain',
                            }}
                            source={{
                                uri: `data:image/jpeg;base64,${recentlyAddedAuthorizedUser?.profileImage}`,
                            }}
                        />
                    </View>
                    <View>
                        <Text>{recentlyAddedAuthorizedUser?.name}</Text>
                    </View>
                </View>
            </Section>
        </>
    );
}
