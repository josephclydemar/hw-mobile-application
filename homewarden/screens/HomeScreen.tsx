import { Context, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';

import CurrentDayDetectionsContext from '../contexts/CurrentDayDetectionsContext';

import Section from '../components/Section';
import DetectionItem from '../components/DetectionItem';

import { CurrentDayDetectionsContextType } from '../types/DetectionsTypes';

export default function HomeScreen() {
    const { currentDayDetections } = useContext<CurrentDayDetectionsContextType>(CurrentDayDetectionsContext as Context<CurrentDayDetectionsContextType>);
    return (
        <>
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
                    data={currentDayDetections}
                    renderItem={function ({ item }) {
                        return <DetectionItem id={item.id} recordedVideo={item.recordedVideo} createdAt={item.createdAt} />;
                    }}
                />
            </Section>
        </>
    );
}
