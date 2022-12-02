import {useState, createContext} from 'react'

export const UserCurrentContext = createContext()

function UserProvider( {children} ) {
    const [currentUser, setCurrentUser] = useState(false)
    
    const handleLogin = () => {
        setCurrentUser(true)
    }

    const value = {
        currentUser,
        handleLogin
    }

    return ( 
        <UserCurrentContext.Provider value={value}>
            {children}
        </UserCurrentContext.Provider>
    );
}

export default UserProvider ;