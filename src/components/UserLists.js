import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";
import '../UserList.css';

import { useSelector, useDispatch } from 'react-redux'
import { getUserDisplayName } from './../store/counterSlice'
import { setLanguage, site } from './../store/site'

const UserList = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const fetchUsers = async () => {
        setLoading(true);
        const response = await axios.get('https://randomuser.me/api/?results=5')
        setUsers(response.data.results);
        setLoading(false);
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const Bclick = (item) => {
        console.log(item);
        const name = `${item.name.first} ${item.name.last}`;
        dispatch(getUserDisplayName(name));
        dispatch(setLanguage('en'));
    }


    return (
        <div className="user-list">
        {!loading ?
            <ul>
                {users.map((item, index) => (
                    <SingleUser user={item} key={index} Bclick={() => {Bclick(item)}} />
                ))}
            </ul>
        :<div className="loadingx">Yükleniyor..</div>}
        </div>
    )
}

export default UserList
