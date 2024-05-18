import { Context, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import CurrentScreenContext from '../contexts/CurrentScreenContext';
import PreviousScreenContext from '../contexts/PreviousScreenContext';

import { CurrentScreenContextType } from '../types/ScreensTypes';
import { PreviousScreenContextType } from '../types/ScreensTypes';

export default function BackToPreviousScreen() {
    const { setCurrentScreen } = useContext<CurrentScreenContextType>(CurrentScreenContext as Context<CurrentScreenContextType>);
    const { previousScreen } = useContext<PreviousScreenContextType>(PreviousScreenContext as Context<PreviousScreenContextType>);
    return (
        <View
            style={{
                paddingTop: 10,
                paddingLeft: 13,
                paddingBottom: 5,
            }}>
            <TouchableOpacity
                onPress={function (): void {
                    setCurrentScreen(() => previousScreen);
                }}>
                <AntDesignIcon name="back" size={50} color="#04062A" />
            </TouchableOpacity>
        </View>
    );
}
