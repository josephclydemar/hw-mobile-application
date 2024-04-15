import { ReactNode, Context, createContext, useState } from 'react';

import { Detection, CurrentDayDetectionsContextType } from '../types/DetectionsTypes';

type CurrentDayDetectionsContextProviderProps = {
    children: ReactNode;
};

const CurrentDayDetectionsContext: Context<CurrentDayDetectionsContextType | null> = createContext<CurrentDayDetectionsContextType | null>(null);

export function CurrentDayDetectionsContextProvider({ children }: CurrentDayDetectionsContextProviderProps) {
    const [currentDayDetections, setCurrentDayDetections] = useState<Detection[]>([]);
    return <CurrentDayDetectionsContext.Provider value={{ currentDayDetections, setCurrentDayDetections }}>{children}</CurrentDayDetectionsContext.Provider>;
}

export default CurrentDayDetectionsContext;
