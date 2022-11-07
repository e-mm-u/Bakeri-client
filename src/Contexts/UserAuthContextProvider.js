import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserAuthContextProvider = ({children}) => {
    const AuthInfo = { }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserAuthContextProvider;