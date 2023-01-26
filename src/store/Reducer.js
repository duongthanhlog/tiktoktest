const initState = {
    currentUser : false,
    theme  : JSON.parse(localStorage.getItem('darkTheme')) ?? false
}

 const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'changeTheme':
            return {
                ...state,
                theme : action.payload
            }
        default :
            return state
    }
}

export default rootReducer