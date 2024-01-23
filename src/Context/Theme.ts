import { createContext, useContext } from "react";

const ThemeContext=createContext({
    Thememode:"light",
    LightTheme:()=>{},
    DarkTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider


// creating custom hooks
export default function useTheme()
{
    return useContext(ThemeContext)
}




