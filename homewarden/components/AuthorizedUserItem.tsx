import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, Image } from 'react-native';

import { AuthorizedUser } from '../types/UsersTypes';

export default function AuthorizedUserItem({ id, profileImage, name, createdAt }: AuthorizedUser) {
    // console.log(profileImage);
    return (
        <View
            style={{
                backgroundColor: '#ccc',
                margin: 5,
                padding: 10,
                borderRadius: 10,
                flexDirection: 'row',
            }}>
            <View
                style={{
                    paddingLeft: 2,
                    // borderRadius: 35,
                    // backgroundColor: '#fff',
                }}>
                {profileImage === null || profileImage === undefined ? (
                    <FontAwesome5Icon name="user" size={50} color="#000" />
                ) : (
                    <Image
                        key={id}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            resizeMode: 'contain',
                        }}
                        source={{
                            uri: `data:image/jpeg;base64,${profileImage}`,
                        }}
                    />
                )}
            </View>
            <View
                style={{
                    marginLeft: 15,
                }}>
                {/* <Text>{profileImage}</Text> */}
                <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>{name}</Text>
                {/* <Text style={{ fontSize: 14 }}>ID: {id}</Text> */}
                <Text>Created At: {createdAt}</Text>
            </View>
        </View>
    );
}
