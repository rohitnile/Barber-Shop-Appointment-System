import { useEffect, useState } from "react";
import {
    getAllUsers,
    deleteUser
} from "../services/userService";
import { Link } from "react-router-dom";

function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDelete = (id) => {

        if (window.confirm("Delete this user?")) {

            deleteUser(id)
                .then(() => {

                    setUsers(
                        users.filter(
                            user => user.id !== id
                        )
                    );

                    alert("User Deleted Successfully");

                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="container mt-4">

            <h2>Users</h2>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.role}</td>
                            <td>

                                <Link
                                    to={`/edit-user/${user.id}`}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default UserList;