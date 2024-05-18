import { Context, createContext, useState, PropsWithChildren } from 'react';

import { SelectedDayRecord, SelectedDayRecordContextType } from '../types/DayRecordsTypes';

const SelectedDayRecordContext: Context<SelectedDayRecordContextType | null> = createContext<SelectedDayRecordContextType | null>(null);

export function SelectedDayRecordContextProvider({ children }: PropsWithChildren) {
    const [selectedDayRecord, setSelectedDayRecord] = useState<SelectedDayRecord>({ id: '', createdAt: '', detections: [] });
    return <SelectedDayRecordContext.Provider value={{ selectedDayRecord, setSelectedDayRecord }}>{children}</SelectedDayRecordContext.Provider>;
}

export default SelectedDayRecordContext;
