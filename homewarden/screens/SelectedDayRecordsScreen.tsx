import { Context, useContext, useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';

import SelectedDayRecordContext from '../contexts/SelectedDayRecordContext';

import { SelectedDayRecordContextType } from '../types/DayRecordsTypes';

import Section from '../components/Section';
import DetectionItem from '../components/DetectionItem';
import BackToPreviousScreen from '../components/BackToPreviousScreen';
import { Detection } from '../types/DetectionsTypes';

export default function SelectedDayRecordsScreen() {
    const { selectedDayRecord } = useContext<SelectedDayRecordContextType>(SelectedDayRecordContext as Context<SelectedDayRecordContextType>);

    const [detectionsToRender, setdetectionsToRender] = useState<Detection[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(
        function (): void {
            setdetectionsToRender(() =>
                selectedDayRecord.detections.filter(function (item: Detection): boolean {
                    return `${new Date(item.createdAt).toLocaleTimeString()}`.toLowerCase().includes(search.toLowerCase());
                }),
            );
        },
        [selectedDayRecord, search],
    );

    return (
        <>
            <BackToPreviousScreen />
            <Section title="Selected Day">
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 23, fontWeight: '500', color: '#000' }}>{new Date(selectedDayRecord.createdAt).toDateString()}</Text>
                </View>
                <View
                    style={{
                        paddingTop: 10,
                        paddingBottom: 20,
                    }}>
                    <TextInput
                        style={{
                            borderColor: '#000',
                            borderWidth: 1,
                            borderRadius: 10,
                            fontSize: 15,
                            paddingLeft: 15,
                        }}
                        placeholder="Search by Date the Day Records"
                        onChangeText={function (data: string): void {
                            setSearch(() => data);
                            // console.log(authorizedUsers);
                        }}
                    />
                </View>
                <FlatList
                    style={{
                        height: 380,
                    }}
                    keyExtractor={function (item) {
                        return item.id;
                    }}
                    data={detectionsToRender}
                    renderItem={function ({ item }) {
                        return (
                            <DetectionItem
                                id={item.id}
                                videoId={item.videoId}
                                videoFormat={item.videoFormat}
                                videoDurationSeconds={item.videoDurationSeconds}
                                createdAt={item.createdAt}
                            />
                        );
                        // return <Text>{item.videoId}</Text>;
                    }}
                />
            </Section>
        </>
    );
}
