import { Context, useContext, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import { WebView } from 'react-native-webview';

import { WebSocketCommandsContextType } from '../types/WebSocketCommandsTypes';

import WebSocketCommandsContext from '../contexts/WebSocketCommandsContext';

import Section from '../components/Section';

export default function ManualCommandsScreen() {
    const {
        controlDoorWebSocketCommands,
        setControlDoorWebSocketCommands,
        controlLightWebSocketCommands,
        setControlLightWebSocketCommands,
        setOperatingModeWebSocketCommands,
        setSetOperatingModeWebSocketCommands,
    } = useContext<WebSocketCommandsContextType>(WebSocketCommandsContext as Context<WebSocketCommandsContextType>);

    return (
        <Section title="Commands">
            <Section title="Modes">
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{
                            margin: 10,
                        }}
                        onPress={function (): void {
                            switch (setOperatingModeWebSocketCommands[1]) {
                                case 'auto':
                                    setSetOperatingModeWebSocketCommands(() => ['from_mobile_set_operating_mode', 'manual']);
                                    break;
                                case 'manual':
                                    setSetOperatingModeWebSocketCommands(() => ['from_mobile_set_operating_mode', 'off']);
                                    break;
                                case 'off':
                                    setSetOperatingModeWebSocketCommands(() => ['from_mobile_set_operating_mode', 'auto']);
                                    break;
                            }
                        }}>
                        <View
                            style={{
                                paddingTop: 18,
                                paddingBottom: 18,
                                backgroundColor: '#04062A',
                                borderRadius: 8,
                                width: 200,
                            }}>
                            <Text
                                style={{
                                    color: '#FFF',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}>
                                {(function (x): string {
                                    switch (x) {
                                        case 'auto':
                                            return 'Auto';
                                        case 'manual':
                                            return 'Manual';
                                        case 'off':
                                            return 'Off';
                                    }
                                })(setOperatingModeWebSocketCommands[1])}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            width: 100,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}>
                        <View
                            style={[
                                {
                                    width: 16,
                                    height: 16,
                                    borderWidth: 1,
                                    borderColor: '#000',
                                    marginTop: 20,
                                },
                                setOperatingModeWebSocketCommands[1] === 'auto' ? { backgroundColor: '#FF0' } : { backgroundColor: '#333' },
                            ]}></View>
                        <View
                            style={[
                                {
                                    width: 16,
                                    height: 16,
                                    borderWidth: 1,
                                    borderColor: '#000',
                                    marginTop: 20,
                                },
                                setOperatingModeWebSocketCommands[1] === 'manual' ? { backgroundColor: '#FF0' } : { backgroundColor: '#333' },
                            ]}></View>
                        <View
                            style={[
                                {
                                    width: 16,
                                    height: 16,
                                    borderWidth: 1,
                                    borderColor: '#000',
                                    marginTop: 20,
                                },
                                setOperatingModeWebSocketCommands[1] === 'off' ? { backgroundColor: '#FF0' } : { backgroundColor: '#333' },
                            ]}></View>
                    </View>
                </View>
            </Section>
            <Section title="Remote Commands">
                {setOperatingModeWebSocketCommands[1] === 'manual' || setOperatingModeWebSocketCommands[1] === 'off' ? (
                    <View
                        style={{
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity
                            style={{
                                margin: 10,
                            }}
                            onPress={function (): void {
                                if (controlDoorWebSocketCommands[1] !== 'open_door') {
                                    setControlDoorWebSocketCommands(() => ['from_mobile_control_door', 'open_door']);
                                }
                                if (controlDoorWebSocketCommands[1] !== 'close_door') {
                                    setControlDoorWebSocketCommands(() => ['from_mobile_control_door', 'close_door']);
                                }
                            }}>
                            <View
                                style={{
                                    paddingTop: 18,
                                    paddingBottom: 18,
                                    backgroundColor: '#04062A',
                                    borderRadius: 8,
                                    width: 200,
                                }}>
                                <Text
                                    style={{
                                        color: '#FFF',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}>
                                    {controlDoorWebSocketCommands[1] !== 'open_door' ? 'Open Door' : 'Close Door'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                margin: 10,
                            }}
                            onPress={function (): void {
                                if (controlLightWebSocketCommands[1] !== 'turnon_light') {
                                    setControlLightWebSocketCommands(() => ['from_mobile_control_light', 'turnon_light']);
                                }
                                if (controlLightWebSocketCommands[1] !== 'turnoff_light') {
                                    setControlLightWebSocketCommands(() => ['from_mobile_control_light', 'turnoff_light']);
                                }
                            }}>
                            <View
                                style={{
                                    paddingTop: 18,
                                    paddingBottom: 18,
                                    backgroundColor: '#04062A',
                                    borderRadius: 8,
                                    width: 200,
                                }}>
                                <Text
                                    style={{
                                        color: '#FFF',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}>
                                    {controlLightWebSocketCommands[1] !== 'turnon_light' ? 'Turn On Light' : 'Turn Off Light'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    ''
                )}
            </Section>
        </Section>
    );
}
