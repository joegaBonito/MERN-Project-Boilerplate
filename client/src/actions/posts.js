import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';

//Action Creators
export const getPosts = () => async (dispatch) => {

    try {
        const {data} = await api.fetchPosts();
        console.log('data ===> '+data);
        dispatch({type:FETCH_ALL, payload:data});

    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        console.log('post ===> ' + post);
        const {data} = await api.createPost(post);
        console.log('data ===> '+data);
        dispatch({type:CREATE,payload:data});
        
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    try{
        const {data} = await api.updatePost(id,post);
        dispatch({type:UPDATE, payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({type:DELETE, payload:id});
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try{
        const {data} = await api.likePost(id);
        // console.log('data: ' + JSON.stringify(data));
        dispatch({type:LIKE, payload:data});
    } catch (error) {
        console.log(error.message);
    }
}