import { Context, useEffect, useContext, useState, PropsWithChildren } from 'react';
import { View, Alert } from 'react-native';

import axios from 'axios';
import * as io from 'socket.io-client';
import { Socket } from 'socket.io-client';

// types
import { Detection, CurrentDayDetectionsContextType } from '../types/DetectionsTypes';
import { DayRecord, DayRecordContextType } from '../types/DayRecordsTypes';
import { AuthorizedUser, AuthorizedUserContextType } from '../types/UsersTypes';

// contexts
import CurrentDayDetectionsContext from '../contexts/CurrentDayDetectionsContext';
import DayRecordsContext from '../contexts/DayRecordsContext';
import AuthorizedUsersContext from '../contexts/AuthorizedUsersContext';

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
    socket = io.connect('http://192.168.1.2:8500');
} catch (err) {
    socket = null;
}

export default function ContextsWrapper({ children }: PropsWithChildren) {
    const { setCurrentDayDetections } = useContext<CurrentDayDetectionsContextType>(CurrentDayDetectionsContext as Context<CurrentDayDetectionsContextType>);
    const { setDayRecords } = useContext<DayRecordContextType>(DayRecordsContext as Context<DayRecordContextType>);
    const { setAuthorizedUsers } = useContext<AuthorizedUserContextType>(AuthorizedUsersContext as Context<AuthorizedUserContextType>);

    const [addedNewCurrentDayDetection, setAddedNewCurrentDayDetection] = useState<boolean>(false);
    const [addedNewDayRecord, setAddedNewDayRecord] = useState<boolean>(false);
    const [addedNewAuthorizedUser, setAddedNewAuthorizedUser] = useState<boolean>(false);

    useEffect(function (): void {
        if (socket !== null) {
            socket.on('added_new_current_day_detection', function (): void {
                setAddedNewCurrentDayDetection(prev => !prev);
            });
            // socket.on('added_new_day_record', function (): void {
            //     setAddedNewDayRecord(prev => !prev);
            // });
            socket.on('added_new_authorized_user', function (): void {
                setAddedNewAuthorizedUser(prev => !prev);
            });

            socket.on('from_server_notif', function (data: any): void {
                Alert.alert('Detection Notification', data, [{ text: 'Close', onPress: () => console.log('Close Notif Alert') }]);
            });
        }
    }, []);

    useEffect(
        function (): void {
            axios.get('http://192.168.1.2:8500/api/v1/detections').then(function ({ data }): void {
                setCurrentDayDetections(() =>
                    data.map(function (item: DetectionDB): Detection {
                        return { id: item._id, recordedVideo: item.recordedVideo, createdAt: item.createdAt };
                    }),
                );
            });
        },
        [addedNewCurrentDayDetection],
    );
    // useEffect(
    //     function (): void {
    //         axios.get('http://192.168.1.2:8500/api/v1/day_records').then(function ({ data }): void {
    //             setDayRecords(() =>
    //                 data.map(function (item: DayRecordDB): DayRecord {
    //                     return { id: item._id, detections: item.detections, createdAt: item.createdAt };
    //                 }),
    //             );
    //         });
    //     },
    //     [addedNewDayRecord],
    // );
    useEffect(
        function (): void {
            axios.get('http://192.168.1.2:8500/api/v1/authorized_users').then(function ({ data }): void {
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
