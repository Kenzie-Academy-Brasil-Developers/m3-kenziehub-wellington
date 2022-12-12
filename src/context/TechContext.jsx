import { createContext, useContext } from "react";

export const TechContext = createContext({})

export const TechProvider = ({children})=>{
    




    return (
        <TechContext.Provider>
            { children }
        </TechContext.Provider>
    )
}