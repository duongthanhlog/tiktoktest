import {useState, createContext} from 'react'
import { UseLocalStorage } from '~/layouts/components/Hooks'

export const ThemeContext = createContext()

function ThemeProvider({children}) {
    const initValueTheme = JSON.parse(localStorage.getItem('darkMode'))
    
   const [darkTheme, setDarkTheme] = useState(() => initValueTheme ?? false)

   const toggleDarkTheme = () => {
       setDarkTheme(UseLocalStorage('darkMode', !darkTheme))
       setDarkTheme(!darkTheme)
    }


    const value = {
        darkTheme,
        toggleDarkTheme
    }

    return <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
}

export default ThemeProvider;