import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import Section from '../components/Section';
import AuthorizedUserItem from '../components/AuthorizedUserItem';

import { AuthorizedUser } from '../types/UsersTypes';

export default function AuthorizedUsersScreen() {
    const [authorizedUsers, setAuthorizedUsers] = useState<AuthorizedUser[]>([
        {
            id: '1',
            name: 'Joseph Clyde Mar',
            time_registered: '12:55PM',
            date_registered: '01-24-23',
        },
        {
            id: '2',
            name: 'Barry Allen',
            time_registered: '09:44PM',
            date_registered: '03-29-24',
        },
        {
            id: '3',
            name: 'Arthur Curry',
            time_registered: '01:21AM',
            date_registered: '09-28-24',
        },
        {
            id: '4',
            name: 'Hal Jordan',
            time_registered: '11:25AM',
            date_registered: '01-22-23',
        },
        {
            id: '5',
            name: 'Clark Kent',
            time_registered: '02:17AM',
            date_registered: '01-22-23',
        },
        {
            id: '6',
            name: 'Bruce Banner',
            time_registered: '10:15PM',
            date_registered: '06-30-23',
        },
        {
            id: '7',
            name: 'Charles Xavier',
            time_registered: '07:55PM',
            date_registered: '09-29-23',
        },
        {
            id: '8',
            name: 'Bruce Wayne',
            time_registered: '11:03PM',
            date_registered: '01-22-24',
        },
        {
            id: '9',
            name: 'Steve Rogers',
            time_registered: '01:55PM',
            date_registered: '08-24-23',
        },
        {
            id: '10',
            name: 'Tony Stark',
            time_registered: '03:55PM',
            date_registered: '05-27-23',
        },
    ]);
    return (
        <View
            style={{
                height: '89.3%',
                backgroundColor: '#fff',
            }}>
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
                            return (
                                <AuthorizedUserItem
                                    id={item.id}
                                    name={item.name}
                                    time_registered={item.time_registered}
                                    date_registered={item.date_registered}
                                />
                            );
                        }}
                    />
                </View>
            </Section>
        </View>
    );
}
