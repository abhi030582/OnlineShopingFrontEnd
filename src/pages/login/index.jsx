import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { userLogin } from '../../services/userService';
import { JWT_TOKEN } from '../../constant//AppConst';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = () => 
{
    const [login,setLogin] =useState({});
    const navigate = useNavigate();

    const handleLogin =()=>{
      userLogin(login).then(response => {
        console.log(response);
        if (!response.data.status) {
            toast.error(response.data.message);
        } else {
            if (response.data.status) {
                localStorage.setItem(JWT_TOKEN, response.data.token);
                toast.success("Login Successfully");
                navigate("/home");
            }
        }
    });
      
    }
    const handleUserName =(e)=>{
       setLogin(prev=>({
        ...prev,
        username:e.target.value
       }));
    }
    const handlePassword =(e)=>{
      setLogin(prev=>({
        ...prev,
        password:e.target.value
       }));
    }


  return (
    <div>
      <ToastContainer />
            <table style={{ margin: 'auto', textAlign: 'center' }}>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>UserName</td>
                        <td><Input value={login.username} onChange={handleUserName} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><Input type='password' value={login.password} onChange={handlePassword} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><Button onClick={handleLogin}>Login</Button></td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default index
