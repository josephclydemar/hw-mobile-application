import { Context, createContext, useState, PropsWithChildren } from 'react';

import { ToGetDayDetectionsContextType } from '../types/DetectionsTypes';

const ToGetDayDetectionsContext: Context<ToGetDayDetectionsContextType | null> = createContext<ToGetDayDetectionsContextType | null>(null);

export function ToGetDayDetectionsContextProvider({ children }: PropsWithChildren) {
    const [toGetDayDetections, setToGetDayDetections] = useState<string[]>([]);
    const [confirmGet, setConfirmGet] = useState<boolean>(false);
    return (
        <ToGetDayDetectionsContext.Provider value={{ toGetDayDetections, setToGetDayDetections, confirmGet, setConfirmGet }}>
            {children}
        </ToGetDayDetectionsContext.Provider>
    );
}

export default ToGetDayDetectionsContext;
