const githubReducer = (state, actions) => {
    switch (actions.type){
        case 'GET_USERS':
            return {
                ...state,
                users: actions.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default githubReducer;