import {
    APP_CATEGORIES_SUCCESS,
    APP_SUB_CATEGORIES_SUCCESS,
    SELECT_APP_CATEGORY_SUCCESS,
  } from '../string';
  
  // Tạo model
  const init = {
    categories: null,
    subCategories: null,
    category: null,
  };
  
  // Phương thức thay đổi dữ liệu của model
  export default (state = init, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case APP_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: action.payload,
        };
      case APP_SUB_CATEGORIES_SUCCESS:
        return {
          ...state,
          subCategories: action.payload,
        };
      case SELECT_APP_CATEGORY_SUCCESS:
        return {
          ...state,
          category: action.payload,
        };
      default:
        return state;
    }
  };