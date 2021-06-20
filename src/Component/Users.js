import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
export const Users = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
         loadUsers();
    }, []);

    const loadUsers = async e =>{
        const result = await axios.get("https://gorest.co.in/public-api/users");
        setUsers(result.data.data);
    }

    return (
    <section className="conatiner">
        <div className="btn btn-submit btn-dark">Add Users</div>
        <br />
        <br />
         <div className='container'>
            <table className="table border shadow">
                <thead className="thead-dark">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                </tr>
               </thead>
                <tbody>
                            {users.map((user,index)=>(
                                 <tr>
                       
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                               <td>{user.email}</td> 
                               <td>{user.gender}</td> 
                             
                               </tr>
                            ))}
                       
                </tbody>
                </table>
                        
        </div>
        </section>
    )
}
