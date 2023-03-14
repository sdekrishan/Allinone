import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../Redux/User/UserAction';

const Dashboard = () => {
    const {users } = useSelector(store=>store.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers())
    },[])
  return (
    <Box border='1px solid black' w='50%' marginInline={'auto'} padding='1rem' boxShadow={'5px 10px grey'} borderRadius='1rem' mb='2rem'> 
    <Flex w='100%' padding={'1rem'} mb='4px' border='1px solid black' borderRadius={'10px'} justifyContent={'space-around'}>
    <Text fontSize={'2xl'} decoration='underline' fontStyle={'italic'}>S.No.</Text>

        <Text fontSize={'2xl'} decoration='underline' fontStyle={'italic'}>Player</Text>
        <Text fontSize={'2xl'} decoration='underline' fontStyle={'italic'}>Score</Text>
    </Flex>
{users && users.sort((a,b)=>b.score-a.score).map((el,ind)=>{
    return <Flex key={ind} w='100%' padding={'1rem'} mb='4px' border='1px solid black' borderRadius={'10px'} alignItems='center' justifyContent={'space-around'}>
        <Text padding='1rem' border='1px solid black' borderRadius={'1rem'}>{ind+1}</Text>
        
        <Text padding='1rem' border='1px solid black' borderRadius={'1rem'}>{el.name}</Text>

        <Text padding='1rem' border='1px solid black' borderRadius={'1rem'}>{el.score}</Text>
    </Flex>
})}
    </Box>
  )
}

export default Dashboard