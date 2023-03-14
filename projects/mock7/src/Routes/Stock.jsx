import { Button, Center, Flex, Grid, Image, Input, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { buyStock, getFilteredData, getSortedData, getUserData } from '../Redux/User/UserAction';
import { BUY_SUCCESS } from '../Redux/User/UserActionTypes';

const Stock = () => {
    const dispatch = useDispatch();
    const {data,stock} = useSelector(store=>store.user)
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getUserData(1))
    },[])

    console.log(stock);

    const handleBuy = (data) =>{
        const value = {
            company_name:data.company_name,
            total:data.cost_per_share*qty
        }
        console.log(value);
        dispatch({type:BUY_SUCCESS,payload:value})
    }

    const handleChange = (value) => {
        dispatch(getFilteredData(value))
    }
    const handleSort = (value)=>{
        dispatch(getSortedData(value))
    }
    
  return (
    <>
    <Flex justifyContent={'space-around'}>
    <Text textDecoration={'underline'} fontSize='2xl' mb='1rem'> Welcome to Stocks Page</Text>
    <Text textDecoration={'underline'} fontSize='2xl' mb='1rem' onClick={()=>navigate("/portfolio")}> Portfolio</Text>
    </Flex>
    <Flex>
    <Select name="company_type" placeholder="Filter By Company" onChange={(e)=>handleChange(e.target.value)}>
            <option value="Bank">Bank</option>
            <option value="IT">IT</option>
            <option value="Automobile">Automobile</option>
            <option value="Pharma">Pharma</option>
            <option value="Oil">Oil</option>
        </Select>
        <Select name="stock_exchange" placeholder="Sort" onChange={(e)=>handleSort(e.target.value)}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
           
        </Select>
    </Flex>
    <Grid templateColumns={'repeat(4,1fr)'} w='80%' p='1rem' m='1rem auto' gap='1rem'>
        {data && data.map((el,ind)=>{
            return <Flex key={ind} textAlign={'left'} lineHeight='2rem' flexDirection={'column'} padding='1rem' border={'1px solid black'} borderRadius='1rem'>
                <Image w='90%' m='auto' src={el.company_logo}></Image>
                <Text>{el.company_name}</Text>
                <Text>Exchange : {el.stock_exchange}</Text>
                <Text>Type : {el.company_type}</Text>

                <Text>Total Shares : {el.total_shares}</Text>
                <Text>Stock Per Share : {el.cost_per_share}</Text>
                <Text>Price Action : {el.price_action}</Text>
                <Input mb='1rem' placeholder='Enter Your desired Qty' onChange={(e)=>setQty(e.target.value)}></Input>
                <Button onClick={()=>handleBuy(el)}>Buy</Button>
            </Flex>
        })}
    </Grid>
    <Center>
        <Button onClick={()=>dispatch(getUserData(1))}>1</Button>
        <Button onClick={()=>dispatch(getUserData(2))}>2</Button>
        <Button onClick={()=>dispatch(getUserData(3))}>3</Button>
        <Button onClick={()=>dispatch(getUserData(4))}>4</Button>
        <Button onClick={()=>dispatch(getUserData(5))}>5</Button>
        <Button onClick={()=>dispatch(getUserData(6))}>6</Button>
        <Button onClick={()=>dispatch(getUserData(7))}>7</Button>
        {/* {data && data.length} */}
    </Center>
    </>
  )
}

export default Stock