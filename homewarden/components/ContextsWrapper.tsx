import { Context, useEffect, useContext, useState, PropsWithChildren } from 'react';
import { View, Alert } from 'react-native';

import axios from 'axios';
import * as io from 'socket.io-client';
import { Socket } from 'socket.io-client';

// constant variables
import { SERVER_HOSTNAME, WEBSOCKET_INBOUND_EVENTS, WEBSOCKET_OUTBOUND_EVENTS, HTTP_REST_ENDPOINTS } from '../common/Constants';

// types
import { Detection, CurrentDayDetectionsContextType } from '../types/DetectionsTypes';
import { DayRecord, DayRecordContextType } from '../types/DayRecordsTypes';
import { AuthorizedUser, AuthorizedUserContextType, ToAddNewAuthorizedUserContextType } from '../types/UsersTypes';

// contexts
import CurrentDayDetectionsContext from '../contexts/CurrentDayDetectionsContext';
import DayRecordsContext from '../contexts/DayRecordsContext';
import AuthorizedUsersContext from '../contexts/AuthorizedUsersContext';
import ToAddNewAuthorizedUserContext from '../contexts/ToAddNewAuthorizedUserContext';

type DetectionDB = {
    _id: string;
    recordedVideo: string;
    createdAt: string;
    __v: number;
};

type DayRecordDB = {
    _id: string;
    detections: Detection[];
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


let socket: Socket | null = null;
try {
    socket = io.connect(SERVER_HOSTNAME);
} catch (err) {
    socket = null;
}

export default function ContextsWrapper({ children }: PropsWithChildren) {
    const { setCurrentDayDetections } = useContext<CurrentDayDetectionsContextType>(CurrentDayDetectionsContext as Context<CurrentDayDetectionsContextType>);
    const { setDayRecords } = useContext<DayRecordContextType>(DayRecordsContext as Context<DayRecordContextType>);
    const { setAuthorizedUsers } = useContext<AuthorizedUserContextType>(AuthorizedUsersContext as Context<AuthorizedUserContextType>);
    const { inputName, confirmAdd, setConfirmAdd } = useContext<ToAddNewAuthorizedUserContextType>(
        ToAddNewAuthorizedUserContext as Context<ToAddNewAuthorizedUserContextType>,
    );

    const [addedNewCurrentDayDetection, setAddedNewCurrentDayDetection] = useState<boolean>(false);
    const [addedNewDayRecord, setAddedNewDayRecord] = useState<boolean>(false);
    const [addedNewAuthorizedUser, setAddedNewAuthorizedUser] = useState<boolean>(false);

    // For socket event listeners
    useEffect(function (): void {
        if (socket !== null) {
            socket.on(WEBSOCKET_INBOUND_EVENTS.AddedNewCurrentDayDetection, function (): void {
                setAddedNewCurrentDayDetection(prev => !prev);
            });
            socket.on(WEBSOCKET_INBOUND_EVENTS.AddedNewDayRecord, function (): void {
                setAddedNewDayRecord(prev => !prev);
            });
            socket.on(WEBSOCKET_INBOUND_EVENTS.AddedNewAuthorizedUser, function (): void {
                setAddedNewAuthorizedUser(prev => !prev);
            });

            socket.on(WEBSOCKET_INBOUND_EVENTS.FromServerNotif, function (data: any): void {
                Alert.alert('Detection Notification', data, [{ text: 'Close', onPress: () => console.log('Close Notif Alert') }]);
            });
        }
    }, []);

    useEffect(
        function (): void {
            if (confirmAdd === true && socket !== null) {
                socket.emit(WEBSOCKET_OUTBOUND_EVENTS.FromMobileToAddNewAuthorizedUser, { name: inputName });
                setConfirmAdd(() => false);
                console.log('Submitted New User Name....');
            }
        },
        [confirmAdd],
    );

    useEffect(
        function (): void {
            axios.get(HTTP_REST_ENDPOINTS.Detections).then(function ({ data }): void {
                setCurrentDayDetections(() =>
                    data.map(function (item: DetectionDB): Detection {
                        return { id: item._id, recordedVideo: item.recordedVideo, createdAt: item.createdAt };
                    }),
                );
            });
        },
        [addedNewCurrentDayDetection],
    );
    useEffect(
        function (): void {
            axios.get(HTTP_REST_ENDPOINTS.DayRecords).then(function ({ data }): void {
                setDayRecords(() =>
                    data.map(function (item: DayRecordDB): DayRecord {
                        return { id: item._id, detections: item.detections, createdAt: item.createdAt };
                    }),
                );
            });
        },
        [addedNewDayRecord],
    );
    useEffect(
        function (): void {
            axios.get(HTTP_REST_ENDPOINTS.AuthorizedUsers).then(function ({ data }): void {
                setAuthorizedUsers(() =>
                    data.map(function (item: AuthorizedUserDB): AuthorizedUser {
                        return { id: item._id, profileImage: item.profileImage, name: item.name, createdAt: item.createdAt };
                    }),
                );
            });
        },
        [addedNewAuthorizedUser],
    );

    return (
        <View
            style={{
                height: '89.3%',
                backgroundColor: '#fff',
            }}>
            {children}
        </View>
    );
}
