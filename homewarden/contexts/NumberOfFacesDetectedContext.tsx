import { Context, createContext, useState, PropsWithChildren } from 'react';
import { NumberOfFacesDetectedContextType } from '../types/NumberOfFacesDetectedTypes';

const NumberOfFacesDetectedContext: Context<NumberOfFacesDetectedContextType | null> = createContext<NumberOfFacesDetectedContextType | null>(null);

export function NumberOfFacesDetectedContextProvider({ children }: PropsWithChildren) {
    const [numberOfFacesDetected, setNumberOfFacesDetected] = useState<number>(0);
    return (
        <NumberOfFacesDetectedContext.Provider value={{ numberOfFacesDetected, setNumberOfFacesDetected }}>{children}</NumberOfFacesDetectedContext.Provider>
    );
}

export default NumberOfFacesDetectedContext;
