import React, { useEffect } from 'react'
import './../App.css';
import Header from './../components/Header';
import Footer from '../components/Footer';
import Dashboard from './../components/Dashboard';
import { useNavigate } from "react-router-dom";
import { getToken } from './../helpers/useToken';

const Home = () => {

    const token = getToken();
    let navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login", { replace: true });
        }else{
            navigate("/", { replace: true });
        }
    }, [])


    return (
        <>
            <Header headerTitle="B2B" />
            <Dashboard />
            <Footer />
        </>
    )

}

export default Home