import React from 'react';
import { validate } from '../Validation';
import style from './Form.module.css';
import RyMForm from '../../components/RyMForm.png'

export default function Form({login}){
    const [userData, setUserData] = React.useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({})

    function handleInputChange(event){
        setErrors(validate({...userData, [event.target.name] : event.target.value}));
        setUserData({...userData, [event.target.name] : event.target.value});
    };

    function handleSubmit(event){
        event.preventDefault()
        login(userData)
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === 'NumpadEnter') {
            handleSubmit(event);
        }
    };

    return(
        <div>
            <img src= {RyMForm} alt= "Home" width={500}/>
            <form onSubmit={handleSubmit} className={style.container}>
                <h2 htmlFor='username'>Email: </h2>
                <input 
                type= 'text' 
                name= 'username' 
                placeholder= 'Username' 
                onChange= {handleInputChange}
                onKeyDown= {handleKeyDown}
                className={style.userName}
                value = {userData.username}
                ></input>

                <p style= {{color: 'red'}}>{errors.username}</p>

                <h2 htmlFor='password'>Password: </h2>
                <input 
                type= 'password' 
                name= 'password' 
                placeholder= '********' 
                onChange= {handleInputChange}
                className={style.password}
                value = {userData.password}
                ></input>
                <p>{errors.password}</p>
                <button type="submit" className= {style.btn}>Log In</button>
            </form>
        </div>
    )
}