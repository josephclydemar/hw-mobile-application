import { Context, useContext, useRef } from 'react';
import { Text, View } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

import { HTTP_REST_ENDPOINTS } from '../common/Constants';

import CurrentPlayingVideoContext from '../contexts/CurrentPlayingVideoContext';

import { CurrentPlayingVideoContextType } from '../types/PlayingVideoTypes';

import Section from '../components/Section';
import SectionMini from '../components/SectionMini';
import BackToPreviousScreen from '../components/BackToPreviousScreen';

export default function SelectedDetectionScreen() {
    const { currentPlayingVideo } = useContext<CurrentPlayingVideoContextType>(CurrentPlayingVideoContext as Context<CurrentPlayingVideoContextType>);
    const videoRef = useRef<VideoRef>(null);

    return (
        <>
            <BackToPreviousScreen />
            <Section title="Selected Detection">
                <SectionMini title="Time of Detection">
                    <View
                        style={{
                            paddingTop: 10,
                            paddingBottom: 10,
                            alignItems: 'center',
                        }}>
                        <Text>{new Date(currentPlayingVideo[0]).toUTCString()}</Text>
                    </View>
                </SectionMini>
                <View
                    style={{
                        backgroundColor: '#111',
                        height: 240,
                        paddingLeft: 0,
                        paddingBottom: 10,
                        borderRadius: 10,
                    }}>
                    <Video
                        ref={videoRef}
                        source={{
                            uri: `${HTTP_REST_ENDPOINTS.DetectionsV1}/${currentPlayingVideo[1]}`,
                            headers: {
                                Range: 'bytes=0-',
                            },
                        }}
                        style={{
                            height: 240,
                            width: 335,
                        }}
                        controls={true}
                    />
                </View>
            </Section>
        </>
    );
}
