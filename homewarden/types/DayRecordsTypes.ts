import { Detection } from './DetectionsTypes';

enum EnumDayRecordsManipulate {
    AddNewDayRecord,
    RemoveDayRecord,
}

type DayRecord = {
    id: string;
    detections: Detection[];
    createdAt: string;
};

type DayRecordsManipulateAction = {
    id: string;
    actionType: EnumDayRecordsManipulate;
};

type DayRecordContextType = {
    dayRecords: DayRecord[];
    setDayRecords: React.Dispatch<React.SetStateAction<DayRecord[]>>;
};

export { EnumDayRecordsManipulate };
export type { DayRecord, DayRecordsManipulateAction, DayRecordContextType };
