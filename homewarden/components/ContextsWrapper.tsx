import { Context, useEffect, useContext, useState, PropsWithChildren } from 'react';
import { View, Alert } from 'react-native';

import axios from 'axios';

// constant variables
import { WEBSOCKET_INBOUND_EVENTS, WEBSOCKET_OUTBOUND_EVENTS, HTTP_REST_ENDPOINTS } from '../common/Constants';

// utils
import { WebSocketConnection } from '../utils/WebSocketUtils';

// types
import { CurrentScreenContextType, PreviousScreenContextType } from '../types/ScreensTypes';
import { CurrentDayDetectionsContextType, Detection, DetectionsContextType } from '../types/DetectionsTypes';
import { DayRecord, DayRecordContextType, SelectedDayRecordContextType } from '../types/DayRecordsTypes';
import { ToGetDayDetectionsContextType } from '../types/DetectionsTypes';
import { AuthorizedUser, AuthorizedUserContextType, ToAddNewAuthorizedUserContextType } from '../types/UsersTypes';
import { AuthorizedUserEntry, AuthorizedUserEntryContextType } from '../types/EntriesTypes';
import { WebSocketCommandsContextType } from '../types/WebSocketCommandsTypes';
import { NumberOfFacesDetectedContextType } from '../types/NumberOfFacesDetectedTypes';

// contexts
import CurrentScreenContext from '../contexts/CurrentScreenContext';
import PreviousScreenContext from '../contexts/PreviousScreenContext';
import DetectionsContext from '../contexts/DetectionsContext';
import CurrentDayDetectionsContext from '../contexts/CurrentDayDetectionsContext';
import DayRecordsContext from '../contexts/DayRecordsContext';
import ToGetDayDetectionsContext from '../contexts/ToGetDayDetectionsContext';
import SelectedDayRecordContext from '../contexts/SelectedDayRecordContext';
import AuthorizedUsersContext from '../contexts/AuthorizedUsersContext';
import AuthorizedUsersEntriesContext from '../contexts/AuthorizedUsersEntriesContext';
import ToAddNewAuthorizedUserContext from '../contexts/ToAddNewAuthorizedUserContext';
import WebSocketCommandsContext from '../contexts/WebSocketCommandsContext';
import NumberOfFacesDetectedContext from '../contexts/NumberOfFacesDetectedContext';

type DetectionDB = {
    _id: string;
    videoId: string;
    videoFormat: string;
    videoDurationSeconds: string;
    createdAt: string;
    __v: number;
};

type DayRecordDB = {
    _id: string;
    detections: string[];
    createdAt: string;
    __v: number;
};

type AuthorizedUserDB = {
    _id: string;
    profileImage: string | null | undefined;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

type AuthorizedUserEntryDB = {
    _id: string;
    capturedImage: string;
    authorizedUserId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export default function ContextsWrapper({ children }: PropsWithChildren) {
    const { currentScreen, setCurrentScreen } = useContext<CurrentScreenContextType>(CurrentScreenContext as Context<CurrentScreenContextType>);
    const { setPreviousScreen } = useContext<PreviousScreenContextType>(PreviousScreenContext as Context<PreviousScreenContextType>);

    const { detections, setDetections } = useContext<DetectionsContextType>(DetectionsContext as Context<DetectionsContextType>);
    const { setCurrentDayDetections } = useContext<CurrentDayDetectionsContextType>(CurrentDayDetectionsContext as Context<CurrentDayDetectionsContextType>);
    const { setDayRecords } = useContext<DayRecordContextType>(DayRecordsContext as Context<DayRecordContextType>);
    const { selectedDayRecord, setSelectedDayRecord } = useContext<SelectedDayRecordContextType>(
        SelectedDayRecordContext as Context<SelectedDayRecordContextType>,
    );
    const { confirmGet, setConfirmGet, toGetDayDetections } = useContext<ToGetDayDetectionsContextType>(
        ToGetDayDetectionsContext as Context<ToGetDayDetectionsContextType>,
    );
    const { setNumberOfFacesDetected } = useContext<NumberOfFacesDetectedContextType>(
        NumberOfFacesDetectedContext as Context<NumberOfFacesDetectedContextType>,
    );
    const { setAuthorizedUsers } = useContext<AuthorizedUserContextType>(AuthorizedUsersContext as Context<AuthorizedUserContextType>);
    const { setAuthorizedUsersEntries } = useContext<AuthorizedUserEntryContextType>(AuthorizedUsersEntriesContext as Context<AuthorizedUserEntryContextType>);
    const { inputName, confirmAdd, setConfirmAdd } = useContext<ToAddNewAuthorizedUserContextType>(
        ToAddNewAuthorizedUserContext as Context<ToAddNewAuthorizedUserContextType>,
    );

    const { controlDoorWebSocketCommands, controlLightWebSocketCommands, setOperatingModeWebSocketCommands } = useContext<WebSocketCommandsContextType>(
        WebSocketCommandsContext as Context<WebSocketCommandsContextType>,
    );

    const [addedNewDetection, setAddedNewDetection] = useState<boolean>(false);
    const [addedNewDayRecord, setAddedNewDayRecord] = useState<boolean>(false);
    const [addedNewAuthorizedUser, setAddedNewAuthorizedUser] = useState<boolean>(false);
    const [addedNewAuthorizedUserEntry, setAddedNewAuthorizedUserEntry] = useState<boolean>(false);

    // For socket event listeners
    useEffect(function (): void {
        if (WebSocketConnection !== null) {
            WebSocketConnection.on(WEBSOCKET_INBOUND_EVENTS.AddedNewDetection, function (): void {
                console.log('New Detection Added HASHDAHDS');
                setAddedNewDetection(prev => !prev);
            });
            WebSocketConnection.on(WEBSOCKET_INBOUND_EVENTS.AddedNewDayRecord, function (): void {
                setAddedNewDayRecord(prev => !prev);
            });
            WebSocketConnection.on(WEBSOCKET_INBOUND_EVENTS.AddedNewAuthorizedUser, function (): void {
                setAddedNewAuthorizedUser(prev => !prev);
            });
            WebSocketConnection.on(WEBSOCKET_INBOUND_EVENTS.AddedNewAuthorizedUserEntry, function (): void {
                setAddedNewAuthorizedUserEntry(prev => !prev);
            });

            WebSocketConnection.on(WEBSOCKET_INBOUND_EVENTS.FromServerNotif, function (data: any): void {
                Alert.alert('Detection Notification', data, [{ text: 'Close', onPress: () => console.log('Close Notif Alert') }]);
            });
            WebSocketConnection.on(WEBSOCKET_INBOUND_EVENTS.FromServerDoorbellPress, function (data: string): void {
                Alert.alert('Doorbell Press Notification', data, [{ text: 'Close', onPress: () => console.log('Close Notif Alert') }]);
            });
            WebSocketConnection.on('from_server_user_entered', function (data: string): void {
                Alert.alert('User Entered Notification', data, [{ text: 'Close', onPress: () => console.log('Close Notif Alert') }]);
            });
            WebSocketConnection.on(WEBSOCKET_INBOUND_EVENTS.FromServerNumberOfFacesDetected, function (data: number): void {
                setNumberOfFacesDetected(() => data);
            });
        }
    }, []);

    // websocket emitters
    useEffect(
        function (): void {
            if (confirmAdd === true && WebSocketConnection !== null) {
                WebSocketConnection.emit(WEBSOCKET_OUTBOUND_EVENTS.FromMobileToAddNewAuthorizedUser, { name: inputName });
                setConfirmAdd(() => false);
                console.log('Submitted New User Name....');
            } else {
                console.log('Add New User Unsuccessful..');
            }
        },
        [confirmAdd],
    );

    useEffect(
        function (): void {
            if (WebSocketConnection !== null) {
                WebSocketConnection.emit(controlDoorWebSocketCommands[0], controlDoorWebSocketCommands[1]);
            }
        },
        [controlDoorWebSocketCommands],
    );

    useEffect(
        function (): void {
            if (WebSocketConnection !== null) {
                WebSocketConnection.emit(controlLightWebSocketCommands[0], controlLightWebSocketCommands[1]);
            }
        },
        [controlLightWebSocketCommands],
    );

    useEffect(
        function (): void {
            if (WebSocketConnection !== null) {
                WebSocketConnection.emit(setOperatingModeWebSocketCommands[0], setOperatingModeWebSocketCommands[1]);
            }
        },
        [setOperatingModeWebSocketCommands],
    );

    useEffect(
        function (): void {
            console.log(confirmGet);
            if (confirmGet === true) {
                setSelectedDayRecord({
                    ...selectedDayRecord,
                    detections: detections.filter(function (item: Detection): boolean {
                        for (let i: number = 0; i < toGetDayDetections.length; i++) {
                            if (toGetDayDetections[i] === item.id) {
                                return true;
                            }
                        }
                        return false;
                    }),
                });
                setPreviousScreen(() => currentScreen);
                setCurrentScreen(() => 'selected-day-records-screen');
                setConfirmGet(() => false);
            } else {
                console.log('Get Specific Detections Not Started..');
            }
        },
        [confirmGet],
    );

    useEffect(
        function (): void {
            axios
                .get(HTTP_REST_ENDPOINTS.DetectionsV1)
                .then(function ({ data }): void {
                    console.log('Fetched the New Detection...');
                    setDetections(() =>
                        data.map(function (item: DetectionDB): Detection {
                            return {
                                id: item._id,
                                videoId: item.videoId,
                                videoFormat: item.videoFormat,
                                videoDurationSeconds: item.videoDurationSeconds,
                                createdAt: item.createdAt,
                            };
                        }),
                    );
                })
                .catch(function (err) {
                    setDetections(prev => prev);
                    Alert.alert('Unsuccessful Day Detections fetch', err.message, [{ text: 'Close', onPress: () => console.log('Close Alert') }]);
                });
        },
        [addedNewDetection],
    );

    useEffect(
        function (): void {
            axios
                .get(HTTP_REST_ENDPOINTS.DayRecordsV1)
                .then(function ({ data }): void {
                    setDayRecords(() =>
                        data.map(function (item: DayRecordDB): DayRecord {
                            return { id: item._id, detections: item.detections, createdAt: item.createdAt };
                        }),
                    );
                })
                .catch(function (err) {
                    setDayRecords(prev => prev);
                    Alert.alert('Unsuccessful Day Records fetch', err.message, [{ text: 'Close', onPress: () => console.log('Close Alert') }]);
                });

            axios
                .get(HTTP_REST_ENDPOINTS.DayRecordsV2)
                .then(function ({ data }): void {
                    axios
                        .patch(HTTP_REST_ENDPOINTS.DetectionsV2, { detection_ids: data.detections })
                        .then(function (detectionsData): void {
                            setCurrentDayDetections(() =>
                                detectionsData.data.map(function (item: DetectionDB): Detection {
                                    return {
                                        id: item._id,
                                        createdAt: item.createdAt,
                                        videoId: item.videoId,
                                        videoFormat: item.videoFormat,
                                        videoDurationSeconds: item.videoDurationSeconds,
                                    };
                                }),
                            );
                        })
                        .catch(function (err) {
                            setCurrentDayDetections(prev => prev);
                            Alert.alert('Unsuccessful Current Day fetch', err.message, [{ text: 'Close', onPress: () => console.log('Close Alert') }]);
                        });
                })
                .catch(function (err) {
                    setCurrentDayDetections(prev => prev);
                    Alert.alert('Unsuccessful Current Day fetch', err.message, [{ text: 'Close', onPress: () => console.log('Close Alert') }]);
                });
        },
        [addedNewDayRecord],
    );

    useEffect(
        function (): void {
            axios
                .get(HTTP_REST_ENDPOINTS.AuthorizedUsersV1)
                .then(function ({ data }): void {
                    setAuthorizedUsers(() =>
                        data.map(function (item: AuthorizedUserDB): AuthorizedUser {
                            return { id: item._id, profileImage: item.profileImage, name: item.name, createdAt: item.createdAt };
                        }),
                    );
                })
                .catch(function (err) {
                    setAuthorizedUsers(prev => prev);
                    Alert.alert('Unsuccessful Authorized Users fetch', err.message, [{ text: 'Close', onPress: () => console.log('Close Alert') }]);
                });
        },
        [addedNewAuthorizedUser],
    );

    useEffect(
        function (): void {
            axios
                .get(HTTP_REST_ENDPOINTS.AuthorizedUsersEntriesV1)
                .then(function ({ data }): void {
                    // console.log(data);
                    setAuthorizedUsersEntries(() =>
                        data.map(function (item: AuthorizedUserEntryDB): AuthorizedUserEntry {
                            return { id: item._id, capturedImage: item.capturedImage, authorizedUserId: item.authorizedUserId, createdAt: item.createdAt };
                        }),
                    );
                })
                .catch(function (err) {
                    setAuthorizedUsersEntries(prev => prev);
                    Alert.alert('Unsuccessful Authorized Users fetch', err.message, [{ text: 'Close', onPress: () => console.log('Close Alert') }]);
                });
        },
        [addedNewAuthorizedUserEntry],
    );

    return (
        <View
            style={{
                height: '91%',
                backgroundColor: '#fff',
            }}>
            {children}
        </View>
    );
}
