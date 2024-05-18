import React from 'react';
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { CurrentScreenContextProvider } from './contexts/CurrentScreenContext';
import { PreviousScreenContextProvider } from './contexts/PreviousScreenContext';

import Main from './Main';

export default function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
            <CurrentScreenContextProvider>
                <PreviousScreenContextProvider>
                    <Main />
                </PreviousScreenContextProvider>
            </CurrentScreenContextProvider>
        </SafeAreaView>
    );
}
