import { Detection } from './DetectionsTypes';

type DailyRecord = {
    id: string;
    detections: Detection[];
    date: string;
};

export type { DailyRecord };
