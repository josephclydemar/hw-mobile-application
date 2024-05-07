

const SERVER_HOSTNAME = 'http://192.168.1.2:8500';

const WEBSOCKET_INBOUND_EVENTS = {
    AddedNewCurrentDayDetection: 'added_new_current_day_detection',
    AddedNewDayRecord: 'added_new_day_record',
    AddedNewAuthorizedUser: 'added_new_authorized_user',
    FromServerNotif: 'from_server_notif',
};

const WEBSOCKET_OUTBOUND_EVENTS = {
    FromMobileToAddNewAuthorizedUser: 'from_mobile_to_add_new_authorized_user',
};

const HTTP_REST_ENDPOINTS = {
    Detections: 'http://192.168.1.2:8500/api/v1/detections',
    DayRecords: 'http://192.168.1.2:8500/api/v1/day_records',
    AuthorizedUsers: 'http://192.168.1.2:8500/api/v1/authorized_users',
};


export { SERVER_HOSTNAME, WEBSOCKET_INBOUND_EVENTS, WEBSOCKET_OUTBOUND_EVENTS, HTTP_REST_ENDPOINTS };