import { ReactNode, Context, createContext, useState } from 'react';

import { DayRecord, DayRecordContextType } from '../types/DayRecordsTypes';

type DayRecordsContextProviderProps = {
    children: ReactNode;
};

const DayRecordsContext: Context<DayRecordContextType | null> = createContext<DayRecordContextType | null>(null);

export function DayRecordsContextProvider({ children }: DayRecordsContextProviderProps) {
    const [dayRecords, setDayRecords] = useState<DayRecord[]>([]);
    return <DayRecordsContext.Provider value={{ dayRecords, setDayRecords }}>{children}</DayRecordsContext.Provider>;
}

export default DayRecordsContext;
