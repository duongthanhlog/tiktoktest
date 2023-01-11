const initState = {
    currentUser : false,
    darkTheme  : JSON.parse(localStorage.getItem('darkTheme')) ?? false
}

 const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'changeTheme':
            return {
                ...state,
                darkTheme : action.payload
            }
        default :
            return state
    }
}

export default rootReducer