import {  useToast } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const CartCheck = ({children}) => {
    const {cart} = useSelector((store)=>store.cart);
    console.log(cart);
    const toast = useToast()
    if(cart.length> 0){
        return children
    }
    else{
        toast({
            title: 'Cart is Empty!',
            description: "Please Add Somthing to Cart!",
            status: 'info',
            duration: 9000,
            isClosable: true,
            position:'top',
          })
          return <Navigate to='/' />
    }
  
}

export default CartCheck