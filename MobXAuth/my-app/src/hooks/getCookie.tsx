import Cookies from 'universal-cookie'
const cookies = new Cookies();
const GetCookie = ({cookiename} : any) =>{
   return cookies.get(cookiename)
}
export default GetCookie