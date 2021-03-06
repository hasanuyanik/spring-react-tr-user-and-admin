import axios from "axios";

export const signup = (body) => {
    return axios.post('/api/1.0/users', body);
};
export const login = creds =>{
    return axios.post('/api/1.0/auth', creds);
};
export const signupAdmin = (body) => {
    return axios.post('/api/1.0/admin', body);
};
export const loginAdmin = creds =>{
    return axios.post('/api/1.0/admin/auth', creds);
};
export const logout = creds =>{
    return axios.post('/api/1.0/logout');
};

export const changeLanguage = language => {
    axios.defaults.headers['accept-language'] = language;
}

export const getUsers = (page = 0, size = 3) => {
    return axios.get(`/api/1.0/users?page=${page}&size=${size}`);
}

export const setAuthorizationHeader = ({ isLoggedIn, token }) => {
    if(isLoggedIn){
        const authorizationHeaderValue = `Bearer ${token}`;
        axios.defaults.headers['Authorization'] = authorizationHeaderValue;
    }else{
        delete axios.defaults.headers['Authorization'];
    }
}

export const getUser = username => {
    return axios.get(`/api/1.0/users/${username}`);
};
export const updateUser = (username, body) => {
    return axios.put(`/api/1.0/users/${username}`, body);
};
export const deleteUser = username => {
    return axios.delete(`/api/1.0/users/${username}`);
}
