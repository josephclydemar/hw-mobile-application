import { Detection } from './DetectionsTypes';

enum EnumDayRecordsManipulate {
    AddNewDayRecord,
    RemoveDayRecord,
}

type DayRecord = {
    id: string;
    detections: string[];
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

type SelectedDayRecord = {
    id: string;
    detections: Detection[];
    createdAt: string;
};

type SelectedDayRecordContextType = {
    selectedDayRecord: SelectedDayRecord;
    setSelectedDayRecord: React.Dispatch<React.SetStateAction<SelectedDayRecord>>;
};

export { EnumDayRecordsManipulate };
export type { DayRecord, DayRecordsManipulateAction, DayRecordContextType, SelectedDayRecord, SelectedDayRecordContextType };
