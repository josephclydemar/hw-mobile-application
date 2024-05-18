import { Context, useEffect, useContext, useState } from 'react';
import { View } from 'react-native';

// contexts
import { DetectionsContextProvider } from './contexts/DetectionsContext';
import { DayRecordsContextProvider } from './contexts/DayRecordsContext';
import { SelectedDayRecordContextProvider } from './contexts/SelectedDayRecordContext';
import { CurrentDayDetectionsContextProvider } from './contexts/CurrentDayDetectionsContext';
import { ToGetDayDetectionsContextProvider } from './contexts/ToGetDayDetectionsContext';
import { AuthorizedUsersContextProvider } from './contexts/AuthorizedUsersContext';
import { AuthorizedUsersEntriesContextProvider } from './contexts/AuthorizedUsersEntriesContext';
import { SelectedAuthorizedUserContextProvider } from './contexts/SelectedAuthorizedUserContext';
import { ToAddNewAuthorizedUserContextProvider } from './contexts/ToAddNewAuthorizedUserContext';
import { CurrentPlayingVideoContextProvider } from './contexts/CurrentPlayingVideoContext';
import { WebSocketCommandsContextProvider } from './contexts/WebSocketCommandsContext';
import { NumberOfFacesDetectedContextProvider } from './contexts/NumberOfFacesDetectedContext';

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
import SelectedDetectionScreen from './screens/SelectedDetectionScreen';
import ManualCommandsScreen from './screens/ManualCommandsScreen';

// types
import { CurrentScreenContextType } from './types/ScreensTypes';

export default function Main() {
    const { currentScreen, setCurrentScreen } = useContext(CurrentScreenContext as Context<CurrentScreenContextType>);
    const [currentScreenComponent, setCurrentScreenComponent] = useState<JSX.Element>(<HomeScreen />);

    useEffect(
        function (): void {
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
                    break;
                case 'selected-detection-screen':
                    setCurrentScreenComponent(<SelectedDetectionScreen />);
                    break;
                case 'manual-commands-screen':
                    setCurrentScreenComponent(<ManualCommandsScreen />);
                    break;
            }
        },
        [currentScreen],
    );
    return (
        <>
            <DetectionsContextProvider>
                <DayRecordsContextProvider>
                    <CurrentDayDetectionsContextProvider>
                        <SelectedDayRecordContextProvider>
                            <ToGetDayDetectionsContextProvider>
                                <AuthorizedUsersEntriesContextProvider>
                                    <AuthorizedUsersContextProvider>
                                        <SelectedAuthorizedUserContextProvider>
                                            <ToAddNewAuthorizedUserContextProvider>
                                                <CurrentPlayingVideoContextProvider>
                                                    <NumberOfFacesDetectedContextProvider>
                                                        <WebSocketCommandsContextProvider>
                                                            <ContextsWrapper>{currentScreenComponent}</ContextsWrapper>
                                                        </WebSocketCommandsContextProvider>
                                                    </NumberOfFacesDetectedContextProvider>
                                                </CurrentPlayingVideoContextProvider>
                                            </ToAddNewAuthorizedUserContextProvider>
                                        </SelectedAuthorizedUserContextProvider>
                                    </AuthorizedUsersContextProvider>
                                </AuthorizedUsersEntriesContextProvider>
                            </ToGetDayDetectionsContextProvider>
                        </SelectedDayRecordContextProvider>
                    </CurrentDayDetectionsContextProvider>
                </DayRecordsContextProvider>
            </DetectionsContextProvider>

            <View>
                <NavigationBar setCurrentScreen={setCurrentScreen} />
            </View>
        </>
    );
}
