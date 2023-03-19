import { createContext } from "react";
import { AuthStore } from "../stores/authStore";
import { AuthApi } from "../api/authApi";

interface IStoreContext {
    authStore: AuthStore;
}
const authApi = new AuthApi();
const authStore = new AuthStore(authApi);

export const storeContext = createContext<IStoreContext>({  authStore });