import { Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { QUIZ_DETAILS_SUCCESS } from "../Redux/Quiz/QuizActionTypes";
import { postUser } from "../Redux/User/UserAction";
import { POST_USER_DETAILS_SUCCESS } from "../Redux/User/UserActionTypes";

const Home = () => {
const [form,setForm ] = useState({
    id:Date.now(),
    name:"",
    category:"",
    difficulty:"",
    qus:"",
    score:0,
})

const dispatch = useDispatch();
const navigate = useNavigate()
const handleChange = (e)=>{
    const {name, value} = e.target;
    setForm({...form,[name]:value})
}

    const handleForm =(e)=>{
        e.preventDefault();
        dispatch({type:QUIZ_DETAILS_SUCCESS,payload:form})
        dispatch(postUser(form))
        navigate("/quiz")
    }
  return (
    <>
    
    <Flex flexDirection={"column"} w='30%' marginInline={'auto'} border='1px solid grey' padding='1rem' borderRadius={'1rem'}>
      <Text mb='1rem' fontSize={'2xl'} fontStyle='italic' decoration={'underline'} color='blackAlpha.800'>Set up your quiz</Text>
      <form action="" onSubmit={handleForm}>
        <Input required mb='1rem' name='name' type="text" placeholder="Enter Your Name" onChange={handleChange }/>
        <Select required mb='1rem' placeholder="Category" name="category" id="" onChange={handleChange }>
    <option value="9">General Knowledge</option>
    <option value="21">Sports</option>
    <option value="22">Geography</option>
        </Select>
        <Select required mb='1rem' placeholder="Select Difficulty" name="difficulty" id="" onChange={handleChange }>
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
        </Select>
        <Input required mb='1rem'type="number" name="qus" placeholder="Number of questions" onChange={handleChange } />
        <Input type="submit" value='Start Quiz' bgColor={'lavender'} width='50%' marginInline={'auto'} fontWeight='medium'  />
      </form>
    </Flex>
    </>
  );
};

export default Home;
