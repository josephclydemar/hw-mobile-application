import { Context, useContext } from 'react';
import { View, Text, Button } from 'react-native';

import CurrentScreenContext from '../contexts/CurrentScreenContext';
import PreviousScreenContext from '../contexts/PreviousScreenContext';
import CurrentPlayingVideoContext from '../contexts/CurrentPlayingVideoContext';

import { CurrentScreenContextType } from '../types/ScreensTypes';
import { PreviousScreenContextType } from '../types/ScreensTypes';
import { Detection } from '../types/DetectionsTypes';
import { CurrentPlayingVideoContextType } from '../types/PlayingVideoTypes';

export default function DetectionItem({ id, videoId, videoFormat, videoDurationSeconds, createdAt }: Detection) {
    const { currentScreen, setCurrentScreen } = useContext<CurrentScreenContextType>(CurrentScreenContext as Context<CurrentScreenContextType>);
    const { setPreviousScreen } = useContext<PreviousScreenContextType>(PreviousScreenContext as Context<PreviousScreenContextType>);
    const { setCurrentPlayingVideo } = useContext<CurrentPlayingVideoContextType>(CurrentPlayingVideoContext as Context<CurrentPlayingVideoContextType>);
    return (
        <View
            style={{
                margin: 5,
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#888',
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
                <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>{new Date(createdAt).toLocaleTimeString()}</Text>
                <Text style={{ color: '#fff' }}>Video Duration: {`${videoDurationSeconds.split('-')[0]} seconds`}</Text>
            </View>
            <View
                style={{
                    width: 180,
                    paddingTop: 5,
                }}>
                <Button
                    title="See Recorded Video"
                    color="#04062A"
                    onPress={function (): void {
                        setCurrentPlayingVideo([createdAt, id]);
                        setPreviousScreen(() => currentScreen);
                        setCurrentScreen(() => 'selected-detection-screen');
                    }}
                />
            </View>
        </View>
    );
}
