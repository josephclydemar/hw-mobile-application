import { Context, useContext } from 'react';
import { View, FlatList } from 'react-native';

import AuthorizedUsersContext from '../contexts/AuthorizedUsersContext';

import Section from '../components/Section';
import AuthorizedUserItem from '../components/AuthorizedUserItem';

import { AuthorizedUser, AuthorizedUserContextType } from '../types/UsersTypes';

export default function AuthorizedUsersScreen() {
    const { authorizedUsers } = useContext<AuthorizedUserContextType>(AuthorizedUsersContext as Context<AuthorizedUserContextType>);
    return (
        <>
            <Section title="Authorized Users Screen">
                <View
                    style={{
                        marginTop: 10,
                    }}>
                    <FlatList
                        style={{
                            height: 500,
                        }}
                        keyExtractor={function (item: AuthorizedUser) {
                            return item.id;
                        }}
                        data={authorizedUsers}
                        renderItem={function ({ item }) {
                            return <AuthorizedUserItem id={item.id} name={item.name} createdAt={item.createdAt} />;
                        }}
                    />
                </View>
            </Section>
        </>
    );
}
