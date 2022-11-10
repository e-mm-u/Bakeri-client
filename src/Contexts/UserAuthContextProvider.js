import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserAuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setloading] = useState(false);

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (updateUser) => {
        setloading(true)
        return updateProfile(auth.currentUser, updateUser )
    }

    const googleLogin = () => {
        setloading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const logout = () => {
        setloading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('useEffect onAuthStateChanged', currentUser);
            setUser(currentUser);
            setloading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = { user, loading, setloading, createUser, updateUserProfile, login, googleLogin, logout}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserAuthContextProvider;