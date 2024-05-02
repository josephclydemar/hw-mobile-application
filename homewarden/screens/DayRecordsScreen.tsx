import { Context, useContext } from 'react';
import { FlatList, View } from 'react-native';

import DayRecordsContext from '../contexts/DayRecordsContext';

import { DayRecordContextType } from '../types/DayRecordsTypes';

import Section from '../components/Section';
import DayRecordItem from '../components/DayRecordItem';

export default function DayRecordsScreen() {
    const { dayRecords } = useContext<DayRecordContextType>(DayRecordsContext as Context<DayRecordContextType>);
    return <>
        <Section title='Day Records'>
            <View>
                <FlatList
                    style={{
                        height: 200,
                    }}
                    keyExtractor={function (item) {
                        return item.id;
                    }}
                    data={dayRecords}
                    renderItem={function ({ item }) {
                        return <DayRecordItem id={item.id} detections={item.detections} createdAt={item.createdAt} />;
                    }}
                />
            </View>
        </Section>
    </>;
}
