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

            // cookie.set('token', action.payload.token, { expires: 1 });
            // console.log("test", typeof Cookies, Cookies);
            login({ token: action.payload.token, user: action.payload.user });
            // console.log(state);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            // delete cookies..
            logout();
            // console.log("state", state);
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

