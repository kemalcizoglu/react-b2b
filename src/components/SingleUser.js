import React from 'react'

const SingleUser = ({ user, Bclick }) => {
    return (
        <li>
            <button onClick={Bclick}>
                <div className="user-details">
                    <img src={user.picture.large} alt="This is a your profile" />
                    <div className="user-info">
                        <h3>{user.name.first} {user.name.last}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
            </button>
        </li>
    )
}

export default SingleUser