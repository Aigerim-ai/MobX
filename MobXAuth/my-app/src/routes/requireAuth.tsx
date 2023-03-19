import {  Navigate, Outlet } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import { useContext, useEffect, useState } from 'react';
import { storeContext } from '../context/storeContext';
import Cookies from 'js-cookie';

const RequireAuth: React.FC = () => {
    const { authStore } = useContext( storeContext);
    const auth = authStore.isAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        const isAuthenticatedFromCookie = Cookies.get('isAuthenticated');
        setIsAuthenticated(isAuthenticatedFromCookie === 'true')
      }, [isAuthenticated]);
 
    return (
         isAuthenticated ? ( <Outlet />  ) 
        : 
        ( <Navigate to="/login" /> )

        );
};
    

const Require = observer(RequireAuth);
export {Require};