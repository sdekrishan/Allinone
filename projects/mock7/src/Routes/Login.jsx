import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LoginFun } from '../Redux/AuthReducer/Auth.action';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {userAuth, AdminAuth,userId} = useSelector((store) => store.auth);

    const handleClick = () =>{
        dispatch(LoginFun({email,password}))
        .then(res=>{
            if(res.type ==='ADMIN_LOGIN'){
                alert("login Successfull");
                navigate("/dashboard")
            }
            else{
                alert("login Succesfull")
                navigate("/stocks")
            }

        })

    }

    console.log(userId);
    
  return (
    <>
    <Flex flexDirection={"column"}
    width="30%"
    m="1rem auto"
    padding="1rem"
    border="1px solid gray">
        <Input mb='.5rem' placeholder='Enter Your Email (admin@stockbroker.com)' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <Input mb='.5rem' placeholder='Enter Your Password (admin123)'  onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <Button bgColor={'lightgreen'} onClick={handleClick}>Login</Button>
    </Flex>
    </>
  )
}

export default Login