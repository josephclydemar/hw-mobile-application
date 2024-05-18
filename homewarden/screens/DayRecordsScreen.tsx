import { Context, useContext, useState, useEffect } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';

import DayRecordsContext from '../contexts/DayRecordsContext';
import ToGetDayDetectionsContext from '../contexts/ToGetDayDetectionsContext';

import { DayRecord, DayRecordContextType } from '../types/DayRecordsTypes';
import { ToGetDayDetectionsContextType } from '../types/DetectionsTypes';

import Section from '../components/Section';
import DayRecordItem from '../components/DayRecordItem';

export default function DayRecordsScreen() {
    const { dayRecords } = useContext<DayRecordContextType>(DayRecordsContext as Context<DayRecordContextType>);
    const { setConfirmGet, setToGetDayDetections } = useContext<ToGetDayDetectionsContextType>(
        ToGetDayDetectionsContext as Context<ToGetDayDetectionsContextType>,
    );
    const [dayRecordsToRender, setDayRecordsToRender] = useState<DayRecord[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(
        function (): void {
            setDayRecordsToRender(() =>
                dayRecords.filter(function (item: DayRecord): boolean {
                    return `${new Date(item.createdAt).toDateString()}`.toLowerCase().includes(search.toLowerCase());
                }),
            );
        },
        [dayRecords, search],
    );

    return (
        <>
            <Section title="Day Records">
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
                        placeholder="Search for Day Records by Date"
                        onChangeText={function (data: string): void {
                            setSearch(() => data);
                            // console.log(authorizedUsers);
                        }}
                    />
                </View>
                <View
                    style={{
                        height: 30,
                    }}>
                    <Text style={{ color: '#777', fontWeight: 'bold', fontSize: 14 }}>No. of Day Records: {dayRecords.length}</Text>
                </View>
                <View>
                    <FlatList
                        style={{
                            height: 500,
                        }}
                        keyExtractor={function (item) {
                            return item.id;
                        }}
                        data={dayRecordsToRender}
                        renderItem={function ({ item }) {
                            return (
                                <DayRecordItem
                                    id={item.id}
                                    createdAt={item.createdAt}
                                    detections={item.detections}
                                    setConfirmGet={setConfirmGet}
                                    setToGetDayDetections={setToGetDayDetections}
                                />
                            );
                        }}
                    />
                </View>
            </Section>
        </>
    );
}
