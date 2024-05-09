const SERVER_HOSTNAME = 'http://192.168.1.2:8500';

const WEBSOCKET_INBOUND_EVENTS = {
    AddedNewDetection: 'update_current_day_detection',
    AddedNewDayRecord: 'update_day_record',
    AddedNewAuthorizedUser: 'update_authorized_user',
    FromServerNotif: 'from_server_notif',
};

const WEBSOCKET_OUTBOUND_EVENTS = {
    FromMobileToAddNewAuthorizedUser: 'from_mobile_to_add_new_authorized_user',
};

const HTTP_REST_ENDPOINTS = {
    DetectionsV1: `${SERVER_HOSTNAME}/api/v1/detections`,
    DayRecordsV1: `${SERVER_HOSTNAME}/api/v1/day_records`,
    AuthorizedUsersV1: `${SERVER_HOSTNAME}/api/v1/authorized_users`,

    DetectionsV2: `${SERVER_HOSTNAME}/api/v2/detections`,
    DayRecordsV2: `${SERVER_HOSTNAME}/api/v2/day_records`,
};

export { SERVER_HOSTNAME, WEBSOCKET_INBOUND_EVENTS, WEBSOCKET_OUTBOUND_EVENTS, HTTP_REST_ENDPOINTS };
