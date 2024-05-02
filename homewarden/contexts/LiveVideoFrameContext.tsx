import { ReactNode, Context, createContext, useState } from 'react';
import { LiveVideoFrameContextType } from '../types/LiveVideoTypes';

type LiveVideoFrameContextProviderProps = {
    children: ReactNode;
};

const LiveVideoFrameContext: Context<LiveVideoFrameContextType | null> = createContext<LiveVideoFrameContextType | null>(null);

export function LiveVideoFrameContextProvider({ children }: LiveVideoFrameContextProviderProps) {
    const [liveVideoFrame, setLiveVideoFrame] = useState<string>('');
    return <LiveVideoFrameContext.Provider value={{ liveVideoFrame, setLiveVideoFrame }}>{children}</LiveVideoFrameContext.Provider>;
}

export default LiveVideoFrameContext;
