import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function User() {
    const [users, setUsers] = useState([]);

    // Fetch users from the server on component mount
    useEffect(() => {
        axios.get('http://localhost:3001/api/users') // Assuming this is your endpoint to get users
            .then(response => {
                setUsers(response.data); // Set the users data
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    const handleDelete = (userId) => {
        // Send delete request to the server
        axios.delete(`http://localhost:3001/api/delete-user/${userId}`)
            .then(response => {
                console.log(response.data);
                setUsers(users.filter(user => user._id !== userId)); // Remove the user from the state
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Link to="/create">ADD+</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`}>Update</Link>
                                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default User;
