// src/store/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../hook/initial';
import { firebaseUser } from '../constants/interfaces';
import {
  MEMBERSHIP_FREE,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
} from '../constants/string';
import { mapUserCredentialToFirebaseUser } from '../ulti/firebaseUserMapper';
import { locale } from 'moment';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

interface AuthState {
  user: firebaseUser | null;
  loading: boolean;
  error: string | null;
}

locale("vi")
export const firebaseRegister = createAsyncThunk(
  'auth/register',
  async ({ user }: { user: any }, { rejectWithValue }) => {
    const email = user?.email;
    const password = user?.password;
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const id = credential?.user?.uid;
      const data = {
        ...user,
        id,
        status: 'Active',
        emailVerified: false,
        phoneVerified: false,
        membership: MEMBERSHIP_FREE,
        createAt: serverTimestamp(),
        onlineAt: serverTimestamp(),
      };
      await setDoc(doc(db, 'clients', id), {
        ...data,
        updatedAt: serverTimestamp(),
      });
      return mapUserCredentialToFirebaseUser(credential.user);
    } catch (error: any) {
      let message = 'e';
      if (error.code === 'auth/weak-password') {
        message = 'Erpr Mật khẩu yếu.';
      } else if (error.code === 'auth/invalid-email') {
        message = 'Email không hợp lệ.';
      } else if (error.code === 'auth/email-already-in-use') {
        message = 'Email đã được sử dụng.';
      }
      return rejectWithValue(message);
    }
  }
);

export const firebaseLogin = createAsyncThunk(
  'auth/login',
  async ({ user }: { user: any }, { rejectWithValue }) => {
    const email = user?.email;
    const password = user?.password;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return mapUserCredentialToFirebaseUser(userCredential.user);
    } catch (error: any) {
      let message = '';
      if (error.code === 'auth/invalid-email') {
        message = 'Email s không hợp lệ.';
      } else if (error.code === 'auth/user-disabled') {
        console.log("Get message "+ message)
        message = 'Tài khoản bị vô hiệu hóa.';
      } else if (error.code === 'auth/user-not-found') {
        message = 'Không tìm thấy người dùng với email này.';
      } else if (error.code === 'auth/wrong-password') {
        message = 'Sai mật khẩu.';
      }
      return rejectWithValue(message);
    }
  }
);

export const firebaseLogout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(firebaseRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(firebaseRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(firebaseRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(firebaseLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(firebaseLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(firebaseLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(firebaseLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(firebaseLogout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(firebaseLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default authSlice.reducer;
