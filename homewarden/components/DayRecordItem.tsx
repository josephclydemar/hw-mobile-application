import { Context, useContext } from 'react';
import { View, Text, Button } from 'react-native';

import SelectedDayRecordContext from '../contexts/SelectedDayRecordContext';

import { SelectedDayRecordContextType } from '../types/DayRecordsTypes';

type DayRecordItemProps = {
    id: string;
    detections: string[];
    createdAt: string;
    setToGetDayDetections: React.Dispatch<React.SetStateAction<string[]>>;
    setConfirmGet: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DayRecordItem({ id, createdAt, detections, setConfirmGet, setToGetDayDetections }: DayRecordItemProps) {
    const { setSelectedDayRecord } = useContext<SelectedDayRecordContextType>(SelectedDayRecordContext as Context<SelectedDayRecordContextType>);
    return (
        <View
            style={{
                margin: 5,
                padding: 10,
                borderWidth: 1,
                borderColor: '#888',
                borderRadius: 10,
                backgroundColor: '#F8F4FB',
                alignItems: 'flex-end',
            }}>
            <View
                style={{
                    backgroundColor: '#2d084e',
                    paddingLeft: 10,
                    paddingTop: 12,
                    paddingBottom: 12,
                    width: 305,
                }}>
                <Text style={{ color: '#FFF', fontSize: 17, fontWeight: 'bold' }}>{new Date(createdAt).toDateString()}</Text>
                <Text style={{ color: '#FFF' }}>No. of Detections: {detections.length}</Text>
                {/* <Text style={{ color: '#FFF', fontSize: 12 }}>ID: {id}</Text> */}
            </View>
            <View
                style={{
                    width: 150,
                    paddingTop: 5,
                }}>
                <Button
                    title="See Detections"
                    color="#04062A"
                    onPress={function (): void {
                        setSelectedDayRecord({ id: id, createdAt: createdAt, detections: [] });
                        setToGetDayDetections(() => detections);
                        setConfirmGet(() => true);
                    }}
                />
            </View>
        </View>
    );
}
