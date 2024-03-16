import React from "react";
import PropTypes from "prop-types";

const UserList = ({users}) => {
    return(
        <ul>
            {users.map((user) => {
                return(
                    <li key={user.email}>
                        <span>{user.name} - </span>
                        <span>{user.age} - </span>
                        <span>{user.email}</span>
                    </li>
                )
            })}
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            email: PropTypes.string.isRequired,
        })
    )
}

export default UserList;