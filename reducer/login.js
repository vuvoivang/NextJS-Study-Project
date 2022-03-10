import { login, logout } from "../utils/auth";

export const initialLoginState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

// reducer for managing login/logout
export const loginReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            login({ token: action.payload.token });
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":

            // delete cookies..
            logout();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

