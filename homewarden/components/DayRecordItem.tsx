import { Context, useContext } from 'react';
import { View, Text } from 'react-native';

import CurrentScreenContext from '../contexts/CurrentScreenContext';
import DayRecordsContext from '../contexts/DayRecordsContext';

import { CurrentScreenContextType } from '../types/ScreensTypes';
import { DayRecord } from '../types/DayRecordsTypes';

export default function DayRecordItem({ id, detections, createdAt }: DayRecord) {
    const { setCurrentScreen } = useContext<CurrentScreenContextType>(CurrentScreenContext as Context<CurrentScreenContextType>);
    return (
        <View
            style={{
                margin: 5,
                padding: 10,
                // borderRadius: 10,
                backgroundColor: '#999',
            }}>
                <View
                    style={{
                        height: 50,
                        backgroundColor: '#aa0',
                    }}>
                    <Text style={{ color: '#fff' }}>{''}</Text>
                </View>
            <Text style={{ color: '#000' }}>ID: {id}</Text>
            <Text style={{ color: '#000' }}>Created At: {createdAt}</Text>
        </View>
    );
}
