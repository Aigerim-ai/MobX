import {  Navigate, Outlet } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import { useContext } from 'react';
import { storeContext } from '../context/storeContext';
import GetCookie from '../hooks/getCookie';
const RequireAuth: React.FC = () => {
    const { authStore } = useContext( storeContext);
    const auth = authStore.isAuth();
    return (
        GetCookie('user') !== '' ? ( <Outlet />  ) 
        : 
        ( <Navigate to="/login" /> )
        );
};
const Require = observer(RequireAuth);
export {Require};