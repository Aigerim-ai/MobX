import {makeAutoObservable} from 'mobx';
import { AuthApi, loginRequest } from '../api/authApi';

export class AuthStore {
    auth = false;
    constructor(private AuthApi: AuthApi){
        makeAutoObservable(this);
    }
    async login(loginRequest: loginRequest){
        try{
            const token = await this.AuthApi.login(loginRequest);
            if(token){
                this.setAuth(true);
            }
        }catch(err){
            this.setAuth(false);
        } 
    }
    setAuth(auth: boolean){
        this.auth = auth;
    }
    isAuth(){
        return this.auth;
    }
    
}
 