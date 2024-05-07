import axios from "axios";

const authAPI = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-type": "application/json"
    }
});

export const login = async (query) => {
    try {
        const response = await authAPI.get('/users', { params: query });
        const user = response.data[0];
        if (user) {
            return user;
        } else {
            throw new Error('Login failed: user not found');
        }
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const register = async (data) => {
    try {
        await authAPI.post('/users', data);
        return data;
    } catch (error) {
        console.error('Signup failed:', error);
        throw error;
    }
};
