import { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './initial';

type firebaseUser = null | {
    accessToken: string;
    email: string;
    uid: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    phoneNumber: string;
    isAnonymous: boolean;
    tenantId: string;
    providerData: any;
    apiKey: string;
    appName: string;
    authDomain: string;
    stsTokenManager: any;
    redirectEventId: string;
    lastLoginAt: string;
    createdAt: string;
    metadata : metadataType;
  }
  type metadataType = {
    creationTime: string;
    lastSignInTime: string;
  }

function useAuth() {
    const [user, setUser] = useState<firebaseUser | null>(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            if (user) {
                const currentUser : firebaseUser = user
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return { user, login, logout };
}

export default useAuth;