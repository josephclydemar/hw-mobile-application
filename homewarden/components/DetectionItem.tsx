import { Context, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import CurrentScreenContext from '../contexts/CurrentScreenContext';

import { CurrentScreenContextType } from '../types/ScreensTypes';
import { Detection } from '../types/DetectionsTypes';

export default function DetectionItem({ id, recordedVideo, createdAt }: Detection) {
    const { setCurrentScreen } = useContext<CurrentScreenContextType>(CurrentScreenContext as Context<CurrentScreenContextType>);
    return (
        <View
            style={{
                margin: 5,
                padding: 10,
                // borderRadius: 10,
                backgroundColor: '#444',
            }}>
            <TouchableOpacity onPress={function (): void {
                setCurrentScreen(() => 'selected-detection-screen');
            }}>
                <View
                    style={{
                        height: 50,
                        backgroundColor: '#aa0',
                    }}>
                    <Text style={{ color: '#fff' }}>{recordedVideo}</Text>
                </View>
            </TouchableOpacity>
            <Text style={{ color: '#000' }}>ID: {id}</Text>
            <Text style={{ color: '#000' }}>Created At: {createdAt}</Text>
        </View>
    );
}
