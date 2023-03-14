import { Alert, Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    axios
      .post(`https://mockdeploy.vercel.app/users`, {
        username,
        email,
        password,
      })
      .then((res) => {
        alert("User has been Registered");
        navigate("/login");
      })
      .catch((err) =>{
        alert("User has been Registered");
        navigate("/login");
      });
  };
  return (
    <>
    <Flex
      flexDirection={"column"}
      width="30%"
      m="1rem auto"
      padding="1rem"
      border="1px solid black"
    >
      <Input
        mb=".5rem"
        placeholder="Enter Your Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Input
        mb=".5rem"
        placeholder="Enter Your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        mb=".5rem"
        placeholder="Enter Your password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button onClick={handleRegister}>Register</Button>
    </Flex>
    </>
  );
};

export default Register;
