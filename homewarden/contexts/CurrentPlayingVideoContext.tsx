import { Context, createContext, useState, PropsWithChildren } from 'react';
import { CurrentPlayingVideoContextType } from '../types/PlayingVideoTypes';

const CurrentPlayingVideoContext: Context<CurrentPlayingVideoContextType | null> = createContext<CurrentPlayingVideoContextType | null>(null);

export function CurrentPlayingVideoContextProvider({ children }: PropsWithChildren) {
    const [currentPlayingVideo, setCurrentPlayingVideo] = useState<[string, string]>(['', '']);
    return <CurrentPlayingVideoContext.Provider value={{ currentPlayingVideo, setCurrentPlayingVideo }}>{children}</CurrentPlayingVideoContext.Provider>;
}

export default CurrentPlayingVideoContext;
