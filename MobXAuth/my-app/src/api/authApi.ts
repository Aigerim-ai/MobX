import Cookies from 'js-cookie';
export interface loginRequest {
    username: string;
    password: string;
}

export class AuthApi {
    async login(loginRequest: loginRequest) {
        if(loginRequest.username === "admin" && loginRequest.password === "admin"){
            Cookies.set('isAuthenticated', 'true');
            return loginRequest
        }
    /* код для отправки запроса на сервер
        const response = await fetch('https://.com/auth/login', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: loginRequest.username,
                password: loginRequest.password,
              }),
        });
        if (response.ok) {
            return await response.json();
        }
        throw new Error('Login failed');
         */
    }
}