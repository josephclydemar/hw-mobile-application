import { View, Text } from 'react-native';

import { Detection } from '../types/DetectionsTypes';

export default function DetectionItem({ id, recordedVideo, createdAt }: Detection) {
    return (
        <View
            style={{
                margin: 5,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#999',
            }}>
            <View
                style={{
                    height: 50,
                    backgroundColor: '#aa0',
                }}>
                <Text style={{ color: '#fff' }}>{recordedVideo}</Text>
            </View>
            <Text style={{ color: '#000' }}>ID: {id}</Text>
            <Text style={{ color: '#000' }}>Created At: {createdAt}</Text>
        </View>
    );
}
