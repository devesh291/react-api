import React from 'react'
import { useState} from 'react';
import axios from 'axios';
import  {useHistory}  from 'react-router-dom';

export const AddUser = () => {

    let history = useHistory();
    const [user, setuser] = useState({
        id:"",
        name:"",
        email:"",
        gender:"",
    });

    const {id,name,email,gender} = user;

    const onInputChange = e =>{
        setuser({...user,[e.target.name] : e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault();
        console.log(user);
        await axios.post(`https://gorest.co.in/public-api/users`,user);
    };

    return (
        <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form  onSubmit = {e => onSubmit(e)}>
            <div className="form-group">
                ID
              <input
                type="number"
                className="form-control form-control-lg"
                name="id"
                value ={id}
                onChange = {e=>onInputChange(e)}
            />
            </div>

            <div className="form-group">
            Name
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value ={name}
                onChange = {e=>onInputChange(e)}
              />
            </div>
            <div className="form-group">
              Email
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                 value ={email}
                onChange = {e=>onInputChange(e)}
              />
            </div>
            
            <div className="form-group">
              Gender
              <input
                type="text"
                className="form-control form-control-lg"
                name="gender"
                value ={gender}
                onChange = {e=>onInputChange(e)}
             />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>

        </div>
    )
}
