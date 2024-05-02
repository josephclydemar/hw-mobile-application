import { Context, useContext, useRef } from 'react';
import { View, Button } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

import CurrentScreenContext from '../contexts/CurrentScreenContext';

import { CurrentScreenContextType } from '../types/ScreensTypes';

import Section from '../components/Section';

export default function SelectedDetectionScreen() {
    const { setCurrentScreen } = useContext<CurrentScreenContextType>(CurrentScreenContext as Context<CurrentScreenContextType>);
    const videoRef = useRef<VideoRef>(null);
    return <>
                <Section title='Selected Detection'>
                    <View 
                        style={{
                            backgroundColor: '#111',
                            paddingLeft: 0,
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
                                    width: 363,
                                }}
                                controls={true}
                                />
                    </View>
                </Section>
                <View>
                    <Button title='Back' onPress={function (): void {
                        setCurrentScreen(() => 'home-screen');
                    }} />
                </View>
    </>
}
