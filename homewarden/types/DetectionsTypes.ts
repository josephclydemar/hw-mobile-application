enum EnumDetectionsManipulate {
    AddNewDetection,
    RemoveDetection,
}

type Detection = {
    id: string;
    videoId: string;
    videoFormat: string;
    videoDurationSeconds: string;
    createdAt: string;
};

type DetectionsManipulateAction = {
    id: string;
    actionType: EnumDetectionsManipulate;
};

type DetectionsContextType = {
    detections: Detection[];
    setDetections: React.Dispatch<React.SetStateAction<Detection[]>>;
};

type CurrentDayDetectionsContextType = {
    currentDayDetections: Detection[];
    setCurrentDayDetections: React.Dispatch<React.SetStateAction<Detection[]>>;
};

type ToGetDayDetectionsContextType = {
    toGetDayDetections: string[];
    setToGetDayDetections: React.Dispatch<React.SetStateAction<string[]>>;
    confirmGet: boolean;
    setConfirmGet: React.Dispatch<React.SetStateAction<boolean>>;
};

export { EnumDetectionsManipulate };
export type { Detection, DetectionsManipulateAction, DetectionsContextType, CurrentDayDetectionsContextType, ToGetDayDetectionsContextType };
