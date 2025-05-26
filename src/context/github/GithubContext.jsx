import React, { useReducer, createContext } from 'react'
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function GithubProvider({ children }) {
    const initialState = {
        users: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Get the users for (testing purpose only);
    const fetchUsers = async () => {
        setLoading();
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        const data = await response.json();

        dispatch({ type: 'GET_USERS', payload: data, })
    }

    // Set loading:
    const setLoading = () => dispatch({ type: 'SET_LOADING' });
    return (
        <GithubContext.Provider value={{ users: state.users, loading: state.loading, fetchUsers }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
