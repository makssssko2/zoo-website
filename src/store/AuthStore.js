import { makeAutoObservable, runInAction } from "mobx";
import api from "../services/axios/api.js";
import {API_URL, AUTH_LOGIN, AUTH_LOGOUT, AUTH_REFRESH, AUTH_REG} from "../constants/endpoints/endpointConst.js";

class AuthStore {
    isAuth;
    userData;
    isLoading;
    constructor() {
        this.isAuth = false;
        this.userData = {};
        this.isLoading = false;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    login = async ({login,password}) => {
        let errorMessage;
        try {
            this.isLoading = true;
            const response = await api.post(AUTH_LOGIN, {login, password});
            localStorage.setItem('token',response.data.token);
            console.log(response);
            runInAction(() => {
                this.isAuth = true;
                this.userData.userName = response.data.username;
            });
            console.log()
        } catch(err) {
            errorMessage = err.response?.data?.message;
        } finally {
            this.isLoading = false;
        }
        return errorMessage || null;
    }

    logout = async () => {
        try {
            this.isLoading = true;
            await api.post(AUTH_LOGOUT);
            localStorage.removeItem('token');
            runInAction(() => {
                this.isAuth = false;
            });
        } catch(err) {
            console.error(err.response?.data?.message);
        } finally {
            this.isLoading = false;
        }
    }

    registration = async ({login,password}) => {
        let errorMessage;
        try {
            this.isLoading = true;
            const response = await api.post(AUTH_REG,{login, password});
            localStorage.setItem('token',response.data.token);
            runInAction(() => {
                this.isAuth = true;
                this.userData.userName = response.data.username;
            })
        } catch(err) {
            console.log(err.response?.data?.message);
            errorMessage = err.response?.data?.message;
        } finally {
            this.isLoading = false;
        }
        return errorMessage || null;
    };

    checkAuth = async () => {
        try {
            this.isLoading = true;
            const response = await api.get(
                API_URL + AUTH_REFRESH, {withCredentials: true}
            );
            localStorage.setItem('token',response.data.token);
            runInAction(() => {
                this.isAuth = true;
            })
        } catch(err) {
            console.error(err.response?.data?.message);
        } finally {
            this.isLoading = false;
        }
    }
}
export default new AuthStore();
