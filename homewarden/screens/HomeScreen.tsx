import { Context, useContext, useRef } from 'react';
import { View, FlatList } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

import CurrentDayDetectionsContext from '../contexts/CurrentDayDetectionsContext';
import LiveVideoFrameContext from '../contexts/LiveVideoFrameContext';

import Section from '../components/Section';
import DetectionItem from '../components/DetectionItem';

import { CurrentDayDetectionsContextType } from '../types/DetectionsTypes';
import { LiveVideoFrameContextType } from '../types/LiveVideoTypes';

export default function HomeScreen() {
    const videoRef = useRef<VideoRef>(null);
    const { currentDayDetections } = useContext<CurrentDayDetectionsContextType>(CurrentDayDetectionsContext as Context<CurrentDayDetectionsContextType>);
    const { liveVideoFrame } = useContext<LiveVideoFrameContextType>(LiveVideoFrameContext as Context<LiveVideoFrameContextType>);

    return (
        <>
            <Section title="Live Video">
                <View style={{
                    backgroundColor: '#111',
                    paddingLeft: 9,
                    paddingBottom: 10,
                    // borderRadius: 10
                }}>
                        <Video 
                            ref={videoRef}
                            source={{
                                uri: 'http://192.168.1.2:8500/api/v1/detections/1714299482085',
                                headers: {
                                    Range: 'bytes=0-',
                                }
                            }}
                            style={{
                                height: 240,
                                width: 345,
                            }}
                            controls={true}
                            />
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
