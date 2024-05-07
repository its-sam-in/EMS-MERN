import { createSlice } from "@reduxjs/toolkit";
import UserService from "../services/UserService"; // Import the UserService module to make API requests

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loginStatus: false,
        loggedInUser: '',
        jwtToken: '',
        employee: null, // Add employee state to store fetched employee data
        error: null // Add error state to handle API request errors
    },
    reducers: {
        userRegister: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = '';
            state.loginStatus = false;
        },
        userLogin: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = action.payload.user;
            state.jwtToken = action.payload.token;
            state.loginStatus = true;
        },
        userUpdateProfile: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = action.payload;
            state.loginStatus = true;
        },
        userLogout: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = '';
            state.loginStatus = false;
        },
        setEmployee: (state, action) => {
            state.employee = action.payload;
            state.error = null; // Reset error if fetching succeeds
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.employee = null; // Reset employee if error occurs
        }
    }
});

export const { userLogin, userLogout, userRegister, userUpdateProfile, setEmployee, setError } = UserSlice.actions;

// Thunk action creator to fetch an employee by ID
export const fetchEmployeeById = (id) => async (dispatch) => {
    try {
        const employee = await UserService.findEmployeeById(id);
        dispatch(setEmployee(employee));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export default UserSlice.reducer;
