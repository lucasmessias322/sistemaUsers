import React, { createContext, useState } from 'react'

const initialState = {
    status: 0,
    token: "",
}

export const AppContext = createContext(initialState)

function Store(props) {
    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            status: state.status,
            token: state.token,
            setStatus: status => updateState('status', status),
            setToken: token => updateState('token', token)
        }}>

            {props.children}

        </AppContext.Provider>

    )
}

export default Store
