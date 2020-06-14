import {combineReducers} from 'redux';
import reducerAuth from './reducerAuth';
    import {reducer as formReducer} from 'redux-form';
    import streamReducer from './streamReducer';

    export default combineReducers ({
        auth: reducerAuth,
        form: formReducer,
    streams:streamReducer
});