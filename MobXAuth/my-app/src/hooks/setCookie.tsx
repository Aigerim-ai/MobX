import Cookies from 'universal-cookie'
const cookies = new Cookies();

const SetCookie = (cookiename: string, user: string) =>{
    cookies.set(cookiename,user,{
        secure: true,
        sameSite: 'strict',
        path: '/'
        
    })
}
export default SetCookie