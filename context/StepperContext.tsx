import { createContext } from 'react'

interface AppContextType {
    userData: any;
    setUserData: any;
    finalData: any;
    setFinalData: any;
}

export const StepperContext = createContext({} as AppContextType)