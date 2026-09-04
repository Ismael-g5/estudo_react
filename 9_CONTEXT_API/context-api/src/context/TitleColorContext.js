import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload };
        default:
            return state;
    }
}


export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' });

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    );
}
