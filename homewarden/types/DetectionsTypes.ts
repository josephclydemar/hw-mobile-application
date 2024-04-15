enum EnumDetectionsManipulate {
    AddNewDetection,
    RemoveDetection,
}

type Detection = {
    id: string;
    recordedVideo: string;
    createdAt: string;
};

type CurrentDayDetectionsManipulateAction = {
    id: string;
    actionType: EnumDetectionsManipulate;
};

type CurrentDayDetectionsContextType = {
    currentDayDetections: Detection[];
    setCurrentDayDetections: React.Dispatch<React.SetStateAction<Detection[]>>;
};

export { EnumDetectionsManipulate };
export type { Detection, CurrentDayDetectionsManipulateAction, CurrentDayDetectionsContextType };
