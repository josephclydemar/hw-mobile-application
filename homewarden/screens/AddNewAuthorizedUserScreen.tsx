import { useState, useEffect, useContext, Context } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';

// contexts
import CurrentScreenContext from '../contexts/CurrentScreenContext';
import ToAddNewAuthorizedUserContext from '../contexts/ToAddNewAuthorizedUserContext';
import AuthorizedUsersContext from '../contexts/AuthorizedUsersContext';

import { AuthorizedUser, AuthorizedUserContextType, ToAddNewAuthorizedUserContextType } from '../types/UsersTypes';
import { CurrentScreenContextType } from '../types/ScreensTypes';

import Section from '../components/Section';
import BackToPreviousScreen from '../components/BackToPreviousScreen';

export default function AddNewAuthorizedUserScreen() {
    const { setCurrentScreen } = useContext<CurrentScreenContextType>(CurrentScreenContext as Context<CurrentScreenContextType>);
    const { inputName, setInputName, setConfirmAdd } = useContext<ToAddNewAuthorizedUserContextType>(
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
            <BackToPreviousScreen />
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
                            if (inputName !== '') {
                                Alert.alert('Confirm Add New Authorized User?', 'Please confirm if you want to add a new authorized user...', [
                                    {
                                        text: 'Confirm',
                                        onPress: function (): void {
                                            console.log('Confirmed Add New Authorized User');
                                            setConfirmAdd(() => true);
                                            setCurrentScreen(() => 'authorized-users-screen');
                                        },
                                    },
                                    {
                                        text: 'Cancel',
                                        onPress: function (): void {
                                            console.log('Cancelled Add New Authorized User');
                                        },
                                    },
                                ]);
                            } else {
                                Alert.alert('Empty Field Alert', 'Please enter a name in the field.', [
                                    { text: 'Close', onPress: () => console.log('Close Notif Alert') },
                                ]);
                            }
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
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 30,
                                fontWeight: 'bold',
                            }}>
                            {recentlyAddedAuthorizedUser?.name}
                        </Text>
                    </View>
                </View>
            </Section>
        </>
    );
}
