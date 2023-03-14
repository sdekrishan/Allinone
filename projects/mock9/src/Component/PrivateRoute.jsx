import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {details} = useSelector(store=> store.quiz);
const toast= useToast()
    if(details.name){
        return children
    }else{
        toast({
            title: 'Preference needed',
          description: "Please fill all required details.",
          status: 'warning',
          duration: 3000,
          isClosable: true,
          position:"top"
        })
        return <Navigate to='/'/>
    }

}

export default PrivateRoute