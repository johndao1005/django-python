import moment from 'moment';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut ,createUserWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth';
import {
MEMBERSHIP_FREE,
  REF_CLIENT,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REF_LOGIN_FAILED,
  GET_LOGIN_LOCK_SUCCESS,
} from '../string';
import { auth, db } from '../../hook/initial';
import { currentUser } from '../../constants/interfaces';
import { collection,doc, setDoc, addDoc, serverTimestamp, DocumentReference, DocumentData } from 'firebase/firestore';
// ========================== User ==========================

// Đăng ký tài khoản

export const firebaseRegister = ({user}:any, callback:any) => (dispatch: any) => {
  const email = user?.email;
  const password = user?.password;
  createUserWithEmailAndPassword(auth,email, password) // tạo tk firebase
    .then((credential: { user: { uid: any; }; }) => {
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
      setDoc(doc(db, REF_CLIENT), {
        ...data,
        updatedAt: serverTimestamp(),
        merge:true
      });
      firebaseLoginSuccess(dispatch, credential?.user);
      if (callback) {
        callback(true);
      }
    })
    .catch((error: { code: string; }) => {
      let message = '';
      if (error.code === 'auth/weak-password') {
        message = 'Mật khẩu yếu.';
      } else if (error.code === 'auth/invalid-email') {
        message = 'Email không hợp lệ.';
      } else if (error.code === 'auth/email-already-in-use') {
        message = 'Email đã được sử dụng.';
      }
      firebaseRegisterFailed(dispatch, message);
      if (callback) {
        callback(false);
      }
    });
};

// Đăng ký thất bại
const firebaseRegisterFailed = (dispatch: (arg0: { type: string; payload: any; }) => void, error: string) => {
  dispatch({
    type: REGISTER_FAILED,
    payload: error,
  });
};

export const firebaseLogin = ({login}: any, callback: () => void) => (dispatch: any) => {
  const email = login?.email;
  const password = login?.password;
  signInWithEmailAndPassword(auth,email, password)
    .then((user: any) => {
      firebaseLoginSuccess(dispatch, user);
      if (callback) {
        callback();
      }
    })
    .catch((error: { code: string; }) => {
      let message = '';
      if (error.code === 'auth/invalid-email') {
        message = 'Email không hợp lệ.';
      } else if (error.code === 'auth/user-disabled') {
        message = 'Tài khoản bị vô hiệu hóa.';
      } else if (error.code === 'auth/user-not-found') {
        message = 'Không tìm thấy người dùng với email này.';
      } else if (error.code === 'auth/wrong-password') {
        message = 'Sai mật khẩu.';
      }
      firebaseLoginFail(dispatch, message);
      //firebaseLoginLock({email});
      if (callback) {
        callback();
      }
    });
};

// Đăng nhập thành công
const firebaseLoginSuccess = (dispatch: (arg0: { type: string; payload: any; }) => void, user: any) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });
};

// Đăng nhập thất bại
const firebaseLoginFail = (dispatch: (arg0: { type: string; payload: any; }) => void, error: string) => {
  dispatch({
    type: LOGIN_FAILED,
    payload: error,
  });
};

const subscribers: any[] = [];
export const firebaseLogout = () => (dispatch: (arg0: { type: string; }) => void) => {
  subscribers.forEach(subscriber => {
    // gỡ bỏ subscibe snapshot nếu out
    subscriber();
  });
  subscribers.length = 0;
    signOut(auth)
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    });
};

// ========================== Password reset ==========================

// Đăng ký tài khoản
export const firebaseReset = ({email}: any, callback: (arg0: boolean) => void) => (dispatch: any) => {
    sendPasswordResetEmail(auth,email)
    .then(() => {
      if (callback) {
        callback(true);
      }
    })
    .catch(() => {
      if (callback) {
        callback(false);
      }
    });
};

// ========================== Login Failed ==========================
// Đăng nhập failed
// const firebaseLoginLock = ({email}:any) => {
//   const id = collection(db,REF_LOGIN_FAILED).id;
//   const data = {
//     id,
//     email,
//     createAt: serverTimestamp(),
//   };
//   doc(id).set(data, {merge: true});
// };

// const failedSub: any[] = [];
// // Theo dõi failed
// export const firebaseSnapFailed = (callback: any) => (dispatch: any) => {
//   const failedRef = firestore().collection(REF_LOGIN_FAILED);
//   const deviceId = getUniqueId();
//   const start = moment().subtract(5, 'hours').toDate();
//   const unSub = failedRef
//     .where('deviceId', '==', deviceId)
//     .where('createAt', '>=', start)
//     .onSnapshot((snapshot: { docs: string | any[]; }) => {
//       if (snapshot?.docs?.length >= 5) {
//         firebaseLoginLockSuccess(dispatch, true);
//       } else {
//         firebaseLoginLockSuccess(dispatch, false);
//       }
//     });
//   failedSub.push(unSub);
// };

// // Đăng nhập thất bại đủ 5 lần
// const firebaseLoginLockSuccess = (dispatch: (arg0: { type: string; payload: any; }) => void, data: boolean) => {
//   dispatch({
//     type: GET_LOGIN_LOCK_SUCCESS,
//     payload: data,
//   });
// };

// export const unSubFailed = () => (dispatch: any) => {
//   failedSub.forEach(subscriber => {
//     subscriber();
//   });
//   failedSub.length = 0;
// };