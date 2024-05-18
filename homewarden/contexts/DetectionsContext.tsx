import { ReactNode, Context, createContext, useState } from 'react';

import { Detection, DetectionsContextType } from '../types/DetectionsTypes';

type DetectionsContextProviderProps = {
    children: ReactNode;
};

const DetectionsContext: Context<DetectionsContextType | null> = createContext<DetectionsContextType | null>(null);

export function DetectionsContextProvider({ children }: DetectionsContextProviderProps) {
    const [detections, setDetections] = useState<Detection[]>([]);
    return <DetectionsContext.Provider value={{ detections, setDetections }}>{children}</DetectionsContext.Provider>;
}

export default DetectionsContext;
