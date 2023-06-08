import {
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_RESET,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_RESET,
    UPDATE_PRODUCT_FAIL,
    CLEAR_ERRORS

} from '../constants/productConstants'
// thêm module nhà sản xuất
//update category
export const categoryReducer = (state = { category: [] }, action) => {
    switch (action.type) {
        case 'ALL_CATEGORY_REQUEST':
        case 'ADMIN_CATEGORY_REQUEST':
            return {
                loading: true,
                category: []
            }

        case 'ALL_CATEGORY_SUCCESS':
            return {
                loading: false,
                category: action.payload.category,
                categoryCount: action.payload.category,
                resPerPage: action.payload.resPerPage,
                filteredCategoryCount: action.payload.filteredCategoryCount
            }

        case 'ADMIN_CATEGORY_SUCCESS':
            return {
                loading: false,
                category: action.payload
            }

        case 'ALL_CATEGORY_FAIL':
        case 'ADMIN_CATEGORY_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const newCategoryReducer = (state = { category: {} }, action) => {
    switch (action.type) {
        case 'NEW_CATEGORY_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'NEW_CATEGORY_SUCCESS':
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                category: action.payload.category
            }

        case 'NEW_CATEGORY_FAIL':
            return {
                ...state,
                error: action.payload
            }

        case 'NEW_CATEGORY_RESET':
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const productReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}







