import * as io from 'socket.io-client';
import { Socket } from 'socket.io-client';

import { SERVER_HOSTNAME } from '../common/Constants';

function createWebSocketConnection(serverHostname: string): Socket | null {
    try {
        let conn = io.connect(serverHostname);
        return conn;
    } catch (err) {
        return null;
    }
}

const WebSocketConnection: Socket | null = createWebSocketConnection(SERVER_HOSTNAME);

export { WebSocketConnection };
