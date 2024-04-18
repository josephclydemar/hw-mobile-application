import { Context, useEffect, useContext, useState } from 'react';
import { View } from 'react-native';

// contexts
import { CurrentDayDetectionsContextProvider } from './contexts/CurrentDayDetectionsContext';
import { DayRecordsContextProvider } from './contexts/DayRecordsContext';
import { AuthorizedUsersContextProvider } from './contexts/AuthorizedUsersContext';

import CurrentScreenContext from './contexts/CurrentScreenContext';

// components
import NavigationBar from './components/NavigationBar';
import ContextsWrapper from './components/ContextsWrapper';

// screens
import HomeScreen from './screens/HomeScreen';
import DayRecordsScreen from './screens/DayRecordsScreen';
import AuthorizedUsersScreen from './screens/AuthorizedUsersScreen';
import SelectedAuthorizedUserScreen from './screens/SelectedAuthorizedUserScreen';
import SelectedDayRecordsScreen from './screens/SelectedDayRecordsScreen';
import AddNewAuthorizedUserScreen from './screens/AddNewAuthorizedUserScreen';

// types
import { CurrentScreenContextType } from './types/ScreensTypes';

export default function Root() {
    const { currentScreen, setCurrentScreen } = useContext(CurrentScreenContext as Context<CurrentScreenContextType>);
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
                case 'selected-authorized-user-screen':
                    setCurrentScreenComponent(<SelectedAuthorizedUserScreen />);
                    break;
                case 'selected-day-records-screen':
                    setCurrentScreenComponent(<SelectedDayRecordsScreen />);
                    break;
                case 'add-new-authorized-users-screen':
                    setCurrentScreenComponent(<AddNewAuthorizedUserScreen />);
            }
        },
        [currentScreen],
    );
    return (
        <>
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
        </>
    );
}
