import axios from 'axios';

import { GET_STORES, DELETE_STORE, ADD_STORE } from './types';

// GET STORES
export const getStores = () => dispatch => {
    axios.get('/api/stores/')
        .then(res => {
            dispatch({
                type: GET_STORES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

// DELETE STORE
export const deleteStore = (id) => dispatch => {
    axios
        .delete(`/api/stores/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_STORE,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

// ADD STORE
export const addStore = (store) => dispatch => {
    axios
        .post('/api/stores/', store)
        .then(res => {
            dispatch({
                type: ADD_STORE,
                payload: res.data
            });
        })
        .catch(err => console.log(err.response.data));
}

// EDIT 
