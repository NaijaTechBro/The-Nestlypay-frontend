import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import authService from './authService'

// Get User from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    isLoggedIn: false,
    twoFactor: false,
    verifiedUsers: 0,
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (
            error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Login user
export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (
            error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// LoginWithCode user
export const loginWithCode = createAsyncThunk('auth/loginWithCode', async(user, thunkAPI) => {
    try {
        return await authService.loginWithCode(user)
    } catch (error) {
        const message = (
            error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


// sendLoginCode user
export const sendLoginCode = createAsyncThunk('auth/sendLoginCode', async(user, thunkAPI) => {
    try {
        return await authService.sendLoginCode(user)
    } catch (error) {
        const message = (
            error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//ACTIONS
// Register
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.twoFactor = false
        }

    },
    extraReducers: (builder) => {
        builder 
        // Login
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload,
            state.user = null,
            toast.error(action.payload);
            console.log(action.payload);
            if (action.payload.includes("login code")) {
                state.twoFactor = true;
            }
        })
        .addCase(register.pending, (state) => { //Register
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload,
            state.user = null
        }) //LoginWithCode
        .addCase(loginWithCode.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loginWithCode.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload,
            state.twoFactor = false,
            toast.success("Login successfully");
        })
        .addCase(loginWithCode.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload,
            state.user = null
        })
        .addCase(sendLoginCode.pending, (state) => {
            state.isLoading = true
        })
        .addCase(sendLoginCode.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload
        })
        .addCase(sendLoginCode.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload,
            state.user = null
        })
    }

})

export const { reset } = authSlice.actions
export default authSlice.reducer