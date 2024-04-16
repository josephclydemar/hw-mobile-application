import { Context, useContext, useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';

import AuthorizedUsersContext from '../contexts/AuthorizedUsersContext';

import Section from '../components/Section';
import AuthorizedUserItem from '../components/AuthorizedUserItem';

import { AuthorizedUser, AuthorizedUserContextType } from '../types/UsersTypes';

export default function AuthorizedUsersScreen() {
    const { authorizedUsers } = useContext<AuthorizedUserContextType>(AuthorizedUsersContext as Context<AuthorizedUserContextType>);
    const [authorizedUsersToRender, setAuthorizedUsersToRender] = useState<AuthorizedUser[]>(authorizedUsers);
    const [search, setSearch] = useState<string>('');

    useEffect(
        function (): void {
            setAuthorizedUsersToRender(() =>
                authorizedUsers.filter(function (item: AuthorizedUser): boolean {
                    return `${item.name}`.toLowerCase().includes(search.toLowerCase());
                }),
            );
        },
        [authorizedUsers, search],
    );

    return (
        <>
            <Section title="Authorized Users Screen">
                <View
                    style={{
                        marginTop: 10,
                    }}>
                    <View>
                        <TextInput
                            style={{
                                borderColor: '#000',
                                borderWidth: 1,
                                borderRadius: 10,
                                fontSize: 15,
                                paddingLeft: 15,
                            }}
                            placeholder="Search by name for an Authorized User"
                            onChangeText={function (data: string): void {
                                setSearch(() => data);
                                // console.log(authorizedUsers);
                            }}
                        />
                    </View>
                    <View
                        style={{
                            height: 30,
                        }}>
                        <Text style={{ color: '#777', fontWeight: 'bold', fontSize: 14 }}>No. of Authorized Users: {authorizedUsers.length}</Text>
                    </View>
                    <FlatList
                        style={{
                            height: 400,
                        }}
                        keyExtractor={function (item: AuthorizedUser) {
                            return item.id;
                        }}
                        data={authorizedUsersToRender}
                        renderItem={function ({ item }) {
                            return <AuthorizedUserItem id={item.id} profileImage={item.profileImage} name={item.name} createdAt={item.createdAt} />;
                        }}
                    />
                </View>
            </Section>
        </>
    );
}
