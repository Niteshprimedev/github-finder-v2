const githubReducer = (state, actions) => {
    switch (actions.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: actions.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default githubReducer;