import { Context, useContext, useRef } from 'react';
import { View, FlatList } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

import CurrentDayDetectionsContext from '../contexts/CurrentDayDetectionsContext';

import Section from '../components/Section';
import DetectionItem from '../components/DetectionItem';

import { CurrentDayDetectionsContextType } from '../types/DetectionsTypes';

export default function HomeScreen() {
    const videoRef = useRef<VideoRef>(null);
    const { currentDayDetections } = useContext<CurrentDayDetectionsContextType>(CurrentDayDetectionsContext as Context<CurrentDayDetectionsContextType>);

    return (
        <>
            <Section title="Live Video">
                <View style={{
                    backgroundColor: '#111',
                    paddingLeft: 9,
                    paddingBottom: 10,
                    // borderRadius: 10
                }}>
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
