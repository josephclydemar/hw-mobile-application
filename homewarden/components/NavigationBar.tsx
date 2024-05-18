import { View, TouchableOpacity, StyleSheet } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

import { CurrentScreen } from '../types/ScreensTypes';

const styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: '#2d084e',
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
                    // Alert.alert('You pressed Folder Icon', 'Hello, this is the Folder icon...', [
                    // { text: 'Close Haha..', onPress: () => console.log('Folder Icon Alert Closed..') },
                    // ]);
                    setCurrentScreen('day-records-screen');
                    console.log('Folder Icon');
                }}>
                <IoniconsIcon name="file-tray-full-sharp" size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={function (): void {
                    // Alert.alert('You pressed Users Icon', 'Hello, this is the Users icon...', [
                    // { text: 'Close Haha..', onPress: () => console.log('Users Icon Alert Closed..') },
                    // ]);
                    setCurrentScreen('authorized-users-screen');
                    console.log('Users Icon');
                }}>
                <IoniconsIcon name="people-sharp" size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={function (): void {
                    // Alert.alert('You pressed Home Icon', 'Hello, this is the Home icon...', [
                    // { text: 'Close Haha..', onPress: () => console.log('Home Icon Alert Closed..') },
                    // ]);
                    setCurrentScreen('home-screen');
                    console.log('Home Icon');
                }}>
                <IoniconsIcon name="home" size={50} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={function (): void {
                    setCurrentScreen(() => 'manual-commands-screen');
                }}>
                <MaterialIconsIcon name="keyboard-command" size={50} color="#fff" />
            </TouchableOpacity>
            {/* <TouchableOpacity
                onPress={function (): void {
                    Alert.alert('Confirm Logout?', 'Please confirm if you want to Logout...', [
                        { text: 'Confirm', onPress: () => console.log('Logout Icon Alert Confirmed..') },
                        { text: 'Cancel', onPress: () => console.log('Logout Icon Alert Cancelled..') },
                    ]);
                    // Alert.prompt('HEllo')
                    console.log('LogOut Icon');
                }}>
                <MaterialIconsIcon name="logout" size={50} color="#fff" />
            </TouchableOpacity> */}
        </View>
    );
}
