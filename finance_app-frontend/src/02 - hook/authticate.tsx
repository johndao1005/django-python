import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import {auth} from './initial';

function useAuth() {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user:any) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const login = async (email:string, password:string) => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await auth().signOut();
        } catch (error) {
            console.error(error);
        }
    };

    return { user, login, logout };
}

export default useAuth;