import { UseLocalStorage } from "~/layouts/components/Hooks"

export const changeTheme = (themeData) => {
    const theme = UseLocalStorage('darkTheme', themeData)
    return {
        type : 'changeTheme',
        payload : theme
    }
}