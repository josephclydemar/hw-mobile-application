import { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import Section from '../components/Section';
import DetectionItem from '../components/DetectionItem';

import { Detection } from '../types/DetectionsTypes';

export default function HomeScreen() {
    const [detections, setDetections] = useState<Detection[]>([
        {
            id: '1',
            time: '12:34PM',
            day: 'MON',
        },
        {
            id: '2',
            time: '03:34AM',
            day: 'FRI',
        },
        {
            id: '3',
            time: '05:12PM',
            day: 'TUE',
        },
        {
            id: '4',
            time: '10:55AM',
            day: 'WED',
        },
        {
            id: '5',
            time: '12:16AM',
            day: 'TUE',
        },
        {
            id: '6',
            time: '08:23PM',
            day: 'THU',
        },
    ]);
    return (
        <View
            style={{
                height: '89.3%',
                backgroundColor: '#fff',
            }}>
            <Section title="Live Video">
                <View
                    style={{
                        height: 220,
                        borderRadius: 10,
                        backgroundColor: '#606',
                    }}>
                    <Text>This is for the Live Video</Text>
                </View>
            </Section>
            <Section title="Detections">
                <FlatList
                    style={{
                        height: 200,
                    }}
                    keyExtractor={function (item) {
                        return item.id;
                    }}
                    data={detections}
                    renderItem={function ({ item }) {
                        return <DetectionItem id={item.id} time={item.time} day={item.day} />;
                    }}
                />
            </Section>
        </View>
    );
}
