import { ReactNode, Context, createContext, useState } from 'react';
import { CurrentScreen, CurrentScreenContextType } from '../types/ScreensTypes';

type CurrentScreenContextProviderProps = {
    children: ReactNode;
};

const CurrentScreenContext: Context<CurrentScreenContextType | null> = createContext<CurrentScreenContextType | null>(null);

export function CurrentScreenContextProvider({ children }: CurrentScreenContextProviderProps) {
    const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('home-screen');
    return <CurrentScreenContext.Provider value={{ currentScreen, setCurrentScreen }}>{children}</CurrentScreenContext.Provider>;
}

export default CurrentScreenContext;
