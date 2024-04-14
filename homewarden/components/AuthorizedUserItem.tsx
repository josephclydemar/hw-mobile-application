import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text } from 'react-native';

import { AuthorizedUser } from '../types/UsersTypes';

export default function AuthorizedUserItem({ id, name, createdAt }: AuthorizedUser) {
    return (
        <View
            style={{
                backgroundColor: '#999',
                margin: 5,
                padding: 10,
                borderRadius: 10,
                flexDirection: 'row',
            }}>
            <View
                style={{
                    width: 50,
                    height: 50,
                    paddingLeft: 2,
                    // borderRadius: 35,
                    // backgroundColor: '#fff',
                }}>
                <FontAwesome5Icon name="user" size={50} color="#000" />
            </View>
            <View
                style={{
                    marginLeft: 15,
                }}>
                <Text>ID: {id}</Text>
                <Text>Name: {name}</Text>
                <Text>Created At: {createdAt}</Text>
            </View>
        </View>
    );
}
