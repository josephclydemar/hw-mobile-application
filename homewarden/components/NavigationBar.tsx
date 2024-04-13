import { View, TouchableOpacity, StyleSheet } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import { CurrentScreen } from '../types/ScreensTypes';

const styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: '#505',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
    },
});

type NavigationBarProps = {
    setCurrentScreen: React.Dispatch<React.SetStateAction<CurrentScreen>>;
};

export default function NavigationBar({ setCurrentScreen }: NavigationBarProps) {
    return (
        <View style={styles.navBarContainer}>
            <TouchableOpacity
                onPress={function (): void {
                    // Alert.alert('You pressed Home Icon', 'Hello, this is the Home icon...', [
                    // { text: 'Close Haha..', onPress: () => console.log('Home Icon Alert Closed..') },
                    // ]);
                    setCurrentScreen('home-screen');
                    console.log('Home Icon');
                }}>
                <EntypoIcon name="home" size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={function (): void {
                    // Alert.alert('You pressed Folder Icon', 'Hello, this is the Folder icon...', [
                    // { text: 'Close Haha..', onPress: () => console.log('Folder Icon Alert Closed..') },
                    // ]);
                    setCurrentScreen('daily-records-screen');
                    console.log('Folder Icon');
                }}>
                <EntypoIcon name="folder" size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={function (): void {
                    // Alert.alert('You pressed Users Icon', 'Hello, this is the Users icon...', [
                    // { text: 'Close Haha..', onPress: () => console.log('Users Icon Alert Closed..') },
                    // ]);
                    setCurrentScreen('authorized-users-screen');
                    console.log('Users Icon');
                }}>
                <FontAwesome5Icon name="users" size={50} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}
