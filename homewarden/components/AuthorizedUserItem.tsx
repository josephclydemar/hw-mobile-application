import { Context, useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import CurrentScreenContext from '../contexts/CurrentScreenContext';
import PreviousScreenContext from '../contexts/PreviousScreenContext';
import SelectedAuthorizedUserContext from '../contexts/SelectedAuthorizedUserContext';

import { AuthorizedUser, SelectedAuthorizedUserContextType } from '../types/UsersTypes';
import { CurrentScreenContextType } from '../types/ScreensTypes';
import { PreviousScreenContextType } from '../types/ScreensTypes';

export default function AuthorizedUserItem({ id, profileImage, name, createdAt }: AuthorizedUser) {
    const { currentScreen, setCurrentScreen } = useContext<CurrentScreenContextType>(CurrentScreenContext as Context<CurrentScreenContextType>);
    const { setPreviousScreen } = useContext<PreviousScreenContextType>(PreviousScreenContext as Context<PreviousScreenContextType>);
    const { setSelectedAuthorizedUser } = useContext<SelectedAuthorizedUserContextType>(
        SelectedAuthorizedUserContext as Context<SelectedAuthorizedUserContextType>,
    );
    return (
        <View
            style={{
                backgroundColor: '#F8F4FB',
                borderColor: '#888',
                borderWidth: 1,
                margin: 5,
                padding: 10,
                borderRadius: 10,
                flexDirection: 'row',
            }}>
            <View
                style={{
                    paddingLeft: 2,
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
                <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>{name}</Text>
                <Text>{new Date(createdAt).toUTCString()}</Text>
                <View
                    style={{
                        marginTop: 10,
                    }}>
                    <Button
                        title="See Entries"
                        color="#04062A"
                        onPress={function (): void {
                            setPreviousScreen(() => currentScreen);
                            setCurrentScreen(() => 'selected-authorized-user-screen');
                            setSelectedAuthorizedUser({
                                id: id,
                                profileImage: profileImage,
                                name: name,
                                createdAt: createdAt,
                            });
                        }}
                    />
                </View>
            </View>
        </View>
    );
}
