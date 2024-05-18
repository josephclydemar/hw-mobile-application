const SERVER_HOSTNAME = 'http://192.168.69.171:8500';
const LIVE_STREAM_HOSTNAME = 'http://192.168.69.96:8080/video_feed';

const WEBSOCKET_INBOUND_EVENTS = {
    AddedNewDetection: 'update_current_day_detection',
    AddedNewDayRecord: 'update_day_record',
    AddedNewAuthorizedUser: 'update_authorized_user',
    AddedNewAuthorizedUserEntry: 'update_authorized_user_entry',
    FromServerNotif: 'from_server_notif',
    FromServerDoorbellPress: 'from_server_doorbell_press',
    FromServerNumberOfFacesDetected: 'from_server_number_of_faces_detected',
};

const WEBSOCKET_OUTBOUND_EVENTS = {
    FromMobileToAddNewAuthorizedUser: 'from_mobile_to_add_new_authorized_user',
};

const HTTP_REST_ENDPOINTS = {
    DetectionsV1: `${SERVER_HOSTNAME}/api/v1/detections`,
    DayRecordsV1: `${SERVER_HOSTNAME}/api/v1/day_records`,
    AuthorizedUsersV1: `${SERVER_HOSTNAME}/api/v1/authorized_users`,
    AuthorizedUsersEntriesV1: `${SERVER_HOSTNAME}/api/v1/authorized_users_entries`,

    DetectionsV2: `${SERVER_HOSTNAME}/api/v2/detections`,
    DayRecordsV2: `${SERVER_HOSTNAME}/api/v2/day_records`,
};

export { SERVER_HOSTNAME, LIVE_STREAM_HOSTNAME, WEBSOCKET_INBOUND_EVENTS, WEBSOCKET_OUTBOUND_EVENTS, HTTP_REST_ENDPOINTS };
