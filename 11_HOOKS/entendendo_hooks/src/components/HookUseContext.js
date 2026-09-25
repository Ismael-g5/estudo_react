import { createContext, useContext } from 'react'

export const SomeContext = createContext();

export const HookUseContext = ({children}) => {

    const contextValue = "testing context";

    return (
        <SomeContext.Provider value={{ contextValue }}>
            {children}
        </SomeContext.Provider>


// o objetivo aqui seria reaproveitar o useContext em contextos diferentes, assim como fiz na home
    )

}