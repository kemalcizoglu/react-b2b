import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
    Link
} from "react-router-dom";

const Cart = () => {

    const { cart } = useSelector(state => state.site);
    const [cartCount, setCartCount] = useState('');

    useEffect(() => {
        setCartCount(cart.length);
    }, [cart])


    return (
        <>
            <Link to="/cart" className="text-light text-decoration-none">Sepet ({cartCount})</Link>
        </>
    )
}

export default Cart