import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/users/auth/`;
// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL_LOGIN, + "login", userData)
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user with Code
const LoginWithCode = async (userData) => {
    const response = await axios.post(API_URL + "/LoginWithCode", userData)
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Send Login Code
const sendLoginCode = async (userData) => {
    const response = await axios.post(API_URL_SEND_LOGIN_CODE, userData)
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
        register,
        login,
        LoginWithCode,
        sendLoginCode,
        
}

export default authService