import React from 'react';
import { validate } from '../Validation';
import style from './Form.module.css'

export default function Form({login}){
    const [userData, setUserData] = React.useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({

    })

    function handleInputChange(event){
        setErrors(validate({...userData, [event.target.name] : event.target.value}));
        setUserData({...userData, [event.target.name] : event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault()
        login(userData)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username: </label>
                <input 
                type= 'text' 
                name= 'username' 
                placeholder= 'Username' 
                onChange= {handleInputChange}
                value = {userData.username}
                ></input>

                <p style= {{color: 'red'}}>{errors.username}</p>

                <label htmlFor='password'>Password: </label>
                <input 
                type= 'password' 
                name= 'password' 
                placeholder= '********' 
                onChange= {handleInputChange}
                value = {userData.password}
                ></input>
                <p>{errors.password}</p>
                <button type="submit" className= {style.btn}>Log In</button>
            </form>
        </div>
    )
}