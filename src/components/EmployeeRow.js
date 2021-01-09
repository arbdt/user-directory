import React from "react";

function EmployeeRow(props){
    let users = props.users;
    // check if users present before rendering
    if (users !== undefined && users[0] !== undefined){
        // if present, render table rows
        return (
            // extract data by mapping user list
            <tbody>
                {users.map((user) => {
                        return (
                            <tr key={user.login.uuid}>
                            <td>
                                <img src={user.picture.medium} alt={"image of " + user.name.first + " " + user.name.last}/>
                            </td>
                            <td>
                                {user.name.first} {user.name.last}
                            </td>
                            <td>
                                {user.phone}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        );
    }
    // otherwise, return empty table
    else {
        return (
        <tbody>
            <tr>
                <td>No Users</td>
            </tr>
        </tbody>);
    }
}

export default EmployeeRow;