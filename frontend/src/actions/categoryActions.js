import axios from 'axios';

// thêm module nhà sản xuất
export const getProducers = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: 'ALL_PRODUCTS_REQUEST' })

        let link = `/api/v1/producers?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/producers?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: 'ALL_PRODUCTS_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'ALL_PRODUCTS_FAIL',
            payload: error.response.data.message
        })
    }
}

export const newCategory = (categoryData) => async (dispatch) => {
    try {

        dispatch({ type: 'NEW_CATEGORY_REQUEST' })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //update category

        const { data } = await axios.post(`/api/v1/admin/category/new`, categoryData, config)

        dispatch({
            type: 'NEW_CATEGORY_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'NEW_CATEGORY_FAIL',
            payload: error.response.data.message
        })
    }
}

export const getAdminCategory = () => async (dispatch) => {
    try {

        dispatch({ type: 'ADMIN_CATEGORY_REQUEST' })

        const { data } = await axios.get(`/api/v1/admin/category`)

        dispatch({
            type: 'ADMIN_CATEGORY_SUCCESS',
            payload: data.category
        })

    } catch (error) {

        dispatch({
            type: 'ADMIN_CATEGORY_FAIL',
            payload: error.response.data.message
        })
    }
}

export const updateCategory = (id, categoryData) => async (dispatch) => {
    try {
        dispatch({ type: 'UPDATE_CATEGORY_REQUEST' })

        const config = {
            header: {
                'Content-type': 'application/json'
            }
        }
        
        const { data } = await axios.put(`/api/v1/admin/category/${id}`, categoryData, config)

        dispatch({
            type: 'UPDATE_CATEGORY_SUCCESS',
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: 'UPDATE_CATEGORY_FAIL',
            payload: error.response.data.message
        })
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'DELETE_CATEGORY_REQUEST' })
        const { data } = await axios.delete(`/api/v1/admin/category/${id}`)

        dispatch({
            type: 'DELETE_CATEGORY_SUCCESS',
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: 'DELETE_CATEGORY_FAIL',
            payload: error.response.data.message
        })
    }
}

export const getCategoryDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'CATEGORY_DETAILS_REQUEST' })
        const { data } = await axios.get(`/api/v1/admin/category/${id}`)

        dispatch({
            type: 'CATEGORY_DETAILS_SUCCESS',
            payload: data.category
        })

    } catch (error) {
        dispatch({
            type: 'CATEGORY_DETAILS_FAIL',
            payload: error.response.data.message
        })
    }
}

// Delete product (Admin)
// export const deleteProduct = (id) => async (dispatch) => {
//     try {

//         dispatch({ type: DELETE_PRODUCT_REQUEST })

//         const { data } = await axios.delete(`/api/v1/admin/product/${id}`)

//         dispatch({
//             type: DELETE_PRODUCT_SUCCESS,
//             payload: data.success
//         })

//     } catch (error) {
//         dispatch({
//             type: DELETE_PRODUCT_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// // Update Product (ADMIN)
// export const updateProduct = (id, productData) => async (dispatch) => {
//     try {

//         dispatch({ type: UPDATE_PRODUCT_REQUEST })

//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }

//         const { data } = await axios.put(`/api/v1/admin/product/${id}`, productData, config)

//         dispatch({
//             type: UPDATE_PRODUCT_SUCCESS,
//             payload: data.success
//         })

//     } catch (error) {
//         dispatch({
//             type: UPDATE_PRODUCT_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// export const getProductDetails = (id) => async (dispatch) => {
//     try {

//         dispatch({ type: PRODUCT_DETAILS_REQUEST })

//         const { data } = await axios.get(`/api/v1/product/${id}`)

//         dispatch({
//             type: PRODUCT_DETAILS_SUCCESS,
//             payload: data.product
//         })

//     } catch (error) {
//         dispatch({
//             type: PRODUCT_DETAILS_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// export const newReview = (reviewData) => async (dispatch) => {
//     try {

//         dispatch({ type: NEW_REVIEW_REQUEST })

//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }

//         const { data } = await axios.put(`/api/v1/review`, reviewData, config)

//         dispatch({
//             type: NEW_REVIEW_SUCCESS,
//             payload: data.success
//         })

//     } catch (error) {
//         dispatch({
//             type: NEW_REVIEW_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }


// export const getAdminProducts = () => async (dispatch) => {
//     try {

//         dispatch({ type: ADMIN_PRODUCTS_REQUEST })

//         const { data } = await axios.get(`/api/v1/admin/products`)

//         dispatch({
//             type: ADMIN_PRODUCTS_SUCCESS,
//             payload: data.products
//         })

//     } catch (error) {

//         dispatch({
//             type: ADMIN_PRODUCTS_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// // Get product reviews
// export const getProductReviews = (id) => async (dispatch) => {
//     try {

//         dispatch({ type: GET_REVIEWS_REQUEST })

//         const { data } = await axios.get(`/api/v1/reviews?id=${id}`)

//         dispatch({
//             type: GET_REVIEWS_SUCCESS,
//             payload: data.reviews
//         })

//     } catch (error) {

//         dispatch({
//             type: GET_REVIEWS_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// // Delete product review
// export const deleteReview = (id, productId) => async (dispatch) => {
//     try {

//         dispatch({ type: DELETE_REVIEW_REQUEST })

//         const { data } = await axios.delete(`/api/v1/reviews?id=${id}&productId=${productId}`)

//         dispatch({
//             type: DELETE_REVIEW_SUCCESS,
//             payload: data.success
//         })

//     } catch (error) {

//         console.log(error.response);

//         dispatch({
//             type: DELETE_REVIEW_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// // Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: 'CLEAR_ERRORS'
    })
}