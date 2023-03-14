import { Box, Button, Flex, Text,useToast} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getQus, postScore } from '../Redux/Quiz/QuizAction';
import { POST_RESULT } from '../Redux/Results/ResultActionTypes';

const Quiz = () => {

    const {details,qus} = useSelector(store=>store.quiz);
    const [page, setPage ] = useState(0);
    const [score, setScore] = useState(0)
    const [check ,setCheck ]= useState([])
    const toast = useToast();
    let arr = qus.results && [...qus.results[page].incorrect_answers, qus.results[page].correct_answer]
    arr =  qus.results &&  arr.sort((a,b)=>0.5-Math.random());

    const dispatch = useDispatch() 
    useEffect(()=>{
        dispatch(getQus(details))
    },[]);
console.log(details,qus);
    const navigate = useNavigate()

    const handleCheck  = (val)=>{
        console.log('working');

        if(val === qus.results[page].correct_answer){
            setScore((prev)=> prev+1)
          return   toast({
                title: 'Correct!',
                description: "Your Answer is Correct",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position:"top"
              })
              
        }
        else{
            toast({
                title: 'Wrong!',
                description: "Your Answer is Wrong.",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position:"top"
              })

        }
        setCheck([...check,page+1])
    }

    console.log(arr)
    console.log(qus,details);

    const handleSubmit = () =>{
        dispatch({type:POST_RESULT,payload:{total:qus.results.length,score:score,}})
        dispatch(postScore(details.id,{score:score}))
        navigate("/results")
    }
  return (
    <Flex flexDirection={'column'} boxShadow='5px 10px grey' border='1px solid lightgrey' w='50%' marginInline={'auto'} padding='1rem' borderRadius={'1rem'}>
        {qus.results && <Box>
                <Text mb='1rem' p='1rem' bgColor={'lavender'} borderRadius='1rem' fontSize={'2xl'} fontStyle='italic' color='blackAlpha.800' >Qus{page+1} : {qus.results[page].question}</Text>
                <Flex flexDirection={'column'} justifyContent='flex-start' w='max-content' padding={'.5rem'}>
                    {arr.map((a,i)=>{
                        return <Button mb='1rem' bgColor={'lightgreen'} isDisabled = {check.includes(page+1)}key ={i} onClick={()=>handleCheck(a)}>
                                {a}
                        </Button>
                    })}

                </Flex>
                <Button bgColor={'lightseagreen'} onClick={()=>setPage(p=>p-1)} isDisabled={page===0}>Previous</Button>
                <Text display={'inline'} marginInline='1rem' fontSize={'2xl'}>{page+1}/{qus.results.length}</Text>
                <Button bgColor={'red.500'} display={page === qus.results.length-1 ? 'none' : 'inline'} onClick={()=>setPage(p=>p+1)}>Next</Button>
                <Button bgColor={'brown'} color='white' display={page === qus.results.length-1 ? 'inline' : 'none'} onClick={ handleSubmit }>Submit</Button>
            </Box>
        }
    </Flex>
  )
}

export default Quiz