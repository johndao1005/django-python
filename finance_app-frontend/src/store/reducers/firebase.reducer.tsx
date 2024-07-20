import {FIREBASE_AUTH_STATUS} from '../string';

// Tạo model
const firebase = {
  auth: null,
};

// Phương thức thay đổi dữ liệu của model
export default (state = firebase, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case FIREBASE_AUTH_STATUS:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};