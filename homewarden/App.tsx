import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// contexts
import { CurrentDayDetectionsContextProvider } from './contexts/CurrentDayDetectionsContext';
import { DayRecordsContextProvider } from './contexts/DayRecordsContext';
import { AuthorizedUsersContextProvider } from './contexts/AuthorizedUsersContext';

// components
import NavigationBar from './components/NavigationBar';
import ContextsWrapper from './components/ContextsWrapper';

// screens
import HomeScreen from './screens/HomeScreen';
import DayRecordsScreen from './screens/DayRecordsScreen';
import AuthorizedUsersScreen from './screens/AuthorizedUsersScreen';

// types
import { CurrentScreen } from './types/ScreensTypes';

export default function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('home-screen');
    const [currentScreenComponent, setCurrentScreenComponent] = useState<JSX.Element>(<HomeScreen />);

    useEffect(
        function () {
            switch (currentScreen) {
                case 'home-screen':
                    setCurrentScreenComponent(<HomeScreen />);
                    break;
                case 'day-records-screen':
                    setCurrentScreenComponent(<DayRecordsScreen />);
                    break;
                case 'authorized-users-screen':
                    setCurrentScreenComponent(<AuthorizedUsersScreen />);
                    break;
            }
        },
        [currentScreen],
    );

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
            <CurrentDayDetectionsContextProvider>
                <DayRecordsContextProvider>
                    <AuthorizedUsersContextProvider>
                        <ContextsWrapper>{currentScreenComponent}</ContextsWrapper>
                    </AuthorizedUsersContextProvider>
                </DayRecordsContextProvider>
            </CurrentDayDetectionsContextProvider>
            <View>
                <NavigationBar setCurrentScreen={setCurrentScreen} />
            </View>
        </SafeAreaView>
    );
}
