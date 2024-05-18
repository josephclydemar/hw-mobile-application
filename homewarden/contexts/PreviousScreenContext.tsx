import { ReactNode, Context, createContext, useState } from 'react';
import { PreviousScreen, PreviousScreenContextType } from '../types/ScreensTypes';

type PreviousScreenContextProviderProps = {
    children: ReactNode;
};

const PreviousScreenContext: Context<PreviousScreenContextType | null> = createContext<PreviousScreenContextType | null>(null);

export function PreviousScreenContextProvider({ children }: PreviousScreenContextProviderProps) {
    const [previousScreen, setPreviousScreen] = useState<PreviousScreen>('home-screen');
    return <PreviousScreenContext.Provider value={{ previousScreen, setPreviousScreen }}>{children}</PreviousScreenContext.Provider>;
}

export default PreviousScreenContext;
