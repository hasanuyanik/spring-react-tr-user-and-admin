import * as ACTIONS from './Contants';
import { login, signup, logout, loginAdmin, signupAdmin } from '../api/apiCalls';

export const logoutSuccess = () => {
    return async (dispatch) => {
        try{
            await logout();
        }catch(err){
            
        }
        dispatch({
            type: ACTIONS.LOGOUT_SUCCESS  
        });
    }
};

export const loginSuccess = authState => {
    return {
        type: ACTIONS.LOGIN_SUCCESS,
        payload: authState
    }
};

export const updateSuccess = ({displayName, image}) => {
    return {
        type: ACTIONS.UPDATE_SUCCESS,
        payload: {
            displayName, 
            image
        }
    }
};

export const loginHandler = (credentials) => {
    return async function (dispatch) {
    const response = await login(credentials);
    const authState = {
         ...response.data.user,
        role: "user",
        password: credentials.password,
        token: response.data.token
    };
    dispatch(loginSuccess(authState));
    return response;
    }
}

export const signupHandler = user => {
    return async function (dispatch) {
        const response = await signup(user);
        dispatch(loginHandler(user));
        return response;
    }
};

export const loginAdminHandler = (credentials) => {
    return async function (dispatch) {
    const response = await loginAdmin(credentials);
    const authState = {
        ...response.data.admin,
        role: "admin",
        password: credentials.password,
        token: response.data.token
    };
    dispatch(loginSuccess(authState));
    return response;
    }
}

export const signupAdminHandler = user => {
    return async function (dispatch) {
        const response = await signupAdmin(user);
        dispatch(loginAdminHandler(user));
        return response;
    }
};