import { Context, createContext, useState, PropsWithChildren } from 'react';
import {
    ControlDoorWebSocketCommand,
    ControlLightWebSocketCommand,
    SetOperatingModeWebSocketCommand,
    WebSocketCommandsContextType,
} from '../types/WebSocketCommandsTypes';

const WebSocketCommandsContext: Context<WebSocketCommandsContextType | null> = createContext<WebSocketCommandsContextType | null>(null);

export function WebSocketCommandsContextProvider({ children }: PropsWithChildren) {
    const [controlDoorWebSocketCommands, setControlDoorWebSocketCommands] = useState<ControlDoorWebSocketCommand>(['from_mobile_control_door', 'stay']);
    const [controlLightWebSocketCommands, setControlLightWebSocketCommands] = useState<ControlLightWebSocketCommand>(['from_mobile_control_light', 'stay']);
    const [setOperatingModeWebSocketCommands, setSetOperatingModeWebSocketCommands] = useState<SetOperatingModeWebSocketCommand>([
        'from_mobile_set_operating_mode',
        'auto',
    ]);
    return (
        <WebSocketCommandsContext.Provider
            value={{
                controlDoorWebSocketCommands,
                setControlDoorWebSocketCommands,
                controlLightWebSocketCommands,
                setControlLightWebSocketCommands,
                setOperatingModeWebSocketCommands,
                setSetOperatingModeWebSocketCommands,
            }}>
            {children}
        </WebSocketCommandsContext.Provider>
    );
}

export default WebSocketCommandsContext;
