//import { SIGN_IN,SIGN_OUT } from './types';
import streams from '../apis/streams';
//import  formValues  from 'redux-form';
import history from '../history';


export const signIn=(userId)=>{
    return {
        type : 'SIGN_IN',
        payload:userId
        
    };
};

export const signOut=()=>{
    return{
        type : 'SIGN_OUT'
    };
};

export const createStream = (formValues)=>{
    return async (dispatch,getState)=>{
      const  {userId}=getState().auth;
      const resp=  await streams.post('/streams',{...formValues,userId});

        dispatch({type:'CREATE_STREAM', payload: resp.data});
        history.push('/');

    };
};

export const fetchStreams=()=>{
    return async (dispatch)=>{
        const resp=await streams.get('/streams');
        dispatch({type:'FETCH_STREAMS',payload:resp.data});
    };
};

export const fetchStream=id=>{
    return async (dispatch)=>{
        const resp=await streams.get(`/streams/${id}`);
        dispatch({type:'FETCH_STREAM',payload:resp.data});
    }
}

export const editStream=(id,formValues)=>{
    return async (dispatch)=>{
        const resp=await streams.patch(`/streams/${id}`,formValues);
        dispatch({type:'EDIT_STREAM',payload:resp.data});
        history.push('/');
    }
}

export const deleteStream=id=>{
    return async (dispatch)=>{
        await streams.delete(`/streams/${id}`);
        dispatch({type:'DELETE_STREAM',payload:id});
        history.push('/');
    }
}