import React, { createContext, useState } from 'react'
import useStorage from '../utils/useStorage';

const initialState = {
    token: "",
    userdata: {}
}

export const AppContext = createContext(initialState)

function Store(props) {
    const [state, setState] = useState(initialState)
    const [token, setToken] = useStorage('token')
    const [currentUserData, setCurrentUserData] = useStorage('currentUserData')

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            token,
            setToken,
            currentUserData,
            setCurrentUserData,
            setUserdata: userdata => updateState('userdata', userdata)   
        }}>

            {props.children}

        </AppContext.Provider>

    )
}

export default Store
