import { User } from 'firebase/auth';
import { firebaseUser } from '../constants/interfaces';

export const mapUserCredentialToFirebaseUser = (user: User): firebaseUser => {
  return {
    uid: user.uid,
    email: user.email || '',
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber || null,
    isAnonymous: user.isAnonymous,
    tenantId: user.tenantId || null,
    providerData: user.providerData,
    metadata: {
      creationTime: user.metadata.creationTime || null,
      lastSignInTime: user.metadata.lastSignInTime || null,
    },
    refreshToken: user.refreshToken,
  };
};