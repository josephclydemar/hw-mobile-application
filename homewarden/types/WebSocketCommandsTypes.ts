type ControlDoorWebSocketCommand = ['from_mobile_control_door', 'stay' | 'open_door' | 'close_door'];
type ControlLightWebSocketCommand = ['from_mobile_control_light', 'stay' | 'turnon_light' | 'turnoff_light'];
type SetOperatingModeWebSocketCommand = ['from_mobile_set_operating_mode', 'auto' | 'manual' | 'off'];

type WebSocketCommandsContextType = {
    controlDoorWebSocketCommands: ControlDoorWebSocketCommand;
    setControlDoorWebSocketCommands: React.Dispatch<React.SetStateAction<ControlDoorWebSocketCommand>>;
    controlLightWebSocketCommands: ControlLightWebSocketCommand;
    setControlLightWebSocketCommands: React.Dispatch<React.SetStateAction<ControlLightWebSocketCommand>>;
    setOperatingModeWebSocketCommands: SetOperatingModeWebSocketCommand;
    setSetOperatingModeWebSocketCommands: React.Dispatch<React.SetStateAction<SetOperatingModeWebSocketCommand>>;
};

export type { ControlDoorWebSocketCommand, ControlLightWebSocketCommand, SetOperatingModeWebSocketCommand, WebSocketCommandsContextType };
