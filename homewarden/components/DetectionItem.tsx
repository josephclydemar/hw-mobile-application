import { View, Text } from 'react-native';

import { Detection } from '../types/DetectionsTypes';

export default function DetectionItem({ id, time, day }: Detection) {
    return (
        <View
            style={{
                margin: 5,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#999',
            }}>
            <Text style={{ color: '#000' }}>Time: {time}</Text>
            <Text style={{ color: '#000' }}>Day: {day}</Text>
        </View>
    );
}
