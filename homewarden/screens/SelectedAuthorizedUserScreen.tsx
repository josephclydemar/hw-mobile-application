import { Context, useContext, useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, Image } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import BackToPreviousScreen from '../components/BackToPreviousScreen';

import AuthorizedUsersEntriesContext from '../contexts/AuthorizedUsersEntriesContext';
import SelectedAuthorizedUserContext from '../contexts/SelectedAuthorizedUserContext';

import { AuthorizedUserEntry, AuthorizedUserEntryContextType } from '../types/EntriesTypes';
import { SelectedAuthorizedUserContextType } from '../types/UsersTypes';

import AuthorizedUserEntryItem from '../components/AuthorizedUserEntryItem';
import Section from '../components/Section';
export default function SelectedAuthorizedUserScreen() {
    const { authorizedUsersEntries } = useContext<AuthorizedUserEntryContextType>(AuthorizedUsersEntriesContext as Context<AuthorizedUserEntryContextType>);
    const { selectedAuthorizedUser } = useContext<SelectedAuthorizedUserContextType>(
        SelectedAuthorizedUserContext as Context<SelectedAuthorizedUserContextType>,
    );
    const [authorizedUserEntryToRender, setAuthorizedUserEntryToRender] = useState<AuthorizedUserEntry[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(
        function (): void {
            setAuthorizedUserEntryToRender(() =>
                authorizedUsersEntries
                    .filter(function (item): boolean {
                        return item.authorizedUserId === selectedAuthorizedUser.id;
                    })
                    .filter(function (item: AuthorizedUserEntry): boolean {
                        return `${new Date(item.createdAt).toLocaleString()}`.toLowerCase().includes(search.toLowerCase());
                    }),
            );
        },
        [authorizedUsersEntries, search],
    );
    return (
        <>
            <BackToPreviousScreen />
            <Section title="Selected Authorized User Entries">
                <View
                    style={{
                        flexDirection: 'row',
                        padding: 5,
                    }}>
                    <View
                        style={{
                            paddingLeft: 2,
                        }}>
                        {selectedAuthorizedUser.profileImage === null || selectedAuthorizedUser.profileImage === undefined ? (
                            <FontAwesome5Icon name="user" size={50} color="#000" />
                        ) : (
                            <Image
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    resizeMode: 'contain',
                                }}
                                source={{
                                    uri: `data:image/jpeg;base64,${selectedAuthorizedUser.profileImage}`,
                                }}
                            />
                        )}
                    </View>
                    <View
                        style={{
                            marginLeft: 15,
                        }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>{selectedAuthorizedUser.name}</Text>
                        <Text>{new Date(selectedAuthorizedUser.createdAt).toUTCString()}</Text>
                    </View>
                </View>
                <View
                    style={{
                        paddingTop: 10,
                        paddingBottom: 20,
                    }}>
                    <TextInput
                        style={{
                            borderColor: '#000',
                            borderWidth: 1,
                            borderRadius: 10,
                            fontSize: 15,
                            paddingLeft: 15,
                        }}
                        placeholder={`Search ${selectedAuthorizedUser.name}'s Entries by Date`}
                        onChangeText={function (data: string): void {
                            setSearch(() => data);
                            // console.log(authorizedUsers);
                        }}
                    />
                </View>
                <View>
                    <FlatList
                        style={{
                            height: 430,
                        }}
                        keyExtractor={function (item) {
                            return item.id;
                        }}
                        data={authorizedUserEntryToRender}
                        renderItem={function ({ item }) {
                            return (
                                <AuthorizedUserEntryItem
                                    id={item.id}
                                    authorizedUserId={item.authorizedUserId}
                                    capturedImage={item.capturedImage}
                                    createdAt={item.createdAt}
                                />
                            );
                        }}
                    />
                </View>
            </Section>
        </>
    );
}
