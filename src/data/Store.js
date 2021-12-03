import React, { createContext, useState } from 'react'
import useStorage from '../utils/useStorage';

const initialState = {
    status: 0,
    token: "",
}

export const AppContext = createContext(initialState)

function Store(props) {
    const [state, setState] = useState(initialState)
    const [token, setToken] = useStorage('token')

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            status: state.status,
            token,
            setToken,
            setStatus: status => updateState('status', status),
            
        }}>

            {props.children}

        </AppContext.Provider>

    )
}

export default Store
