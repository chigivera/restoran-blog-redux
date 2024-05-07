import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../services/auth";

const initialState = {
    authenticated: false,
    isAdmin: false,
    user: null,
    loading: false,
    error: false,
    success: false,
};

// Async thunk for sign-in
export const signin = createAsyncThunk('auth/signin', async (query, { rejectWithValue }) => {
    try {
        const user = await login(query);
        if (!user) {
            return rejectWithValue('Login failed');
        }
        return user;
    } catch (error) {
        return rejectWithValue('Login failed');
    }
});

// Async thunk for sign-up
export const signup = createAsyncThunk('auth/signup', async (data, { rejectWithValue }) => {
    try {
        await register(data);
        return data;
    } catch (error) {
        return rejectWithValue('Signup failed');
    }
});

// Auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.authenticated = false;
            state.isAdmin = false;
            state.user = null;
            state.success = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signin.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.success = false;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.loading = false;
                state.authenticated = true;
                state.user = action.payload;
                state.isAdmin = action.payload.role === 'admin';
                state.success = true;
            })
            .addCase(signin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || true;
                state.success = false;
            })
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.authenticated = true;
                state.user = action.payload;
                state.isAdmin = action.payload.role === 'admin';
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || true;
            });
    }
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
