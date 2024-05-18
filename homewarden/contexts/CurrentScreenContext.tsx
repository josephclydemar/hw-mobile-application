import { Context, createContext, useState, PropsWithChildren } from 'react';
import { CurrentScreen, CurrentScreenContextType } from '../types/ScreensTypes';

const CurrentScreenContext: Context<CurrentScreenContextType | null> = createContext<CurrentScreenContextType | null>(null);

export function CurrentScreenContextProvider({ children }: PropsWithChildren) {
    const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('home-screen');
    return <CurrentScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>{children}</CurrentScreenContext.Provider>;
}

export default CurrentScreenContext;
