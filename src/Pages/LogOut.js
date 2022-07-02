import React, { useEffect } from 'react'
import { removeToken } from '../helpers/useToken';
import { removeName } from '../helpers/useUserName';
import { useNavigate } from 'react-router-dom';


const LogOut = () => {

    let navigate = useNavigate();

    useEffect(() => {

        removeToken();
        removeName();
        navigate("/login", { replace: true });

    }, [])

    return (
        <div></div>
    )
}

export default LogOut