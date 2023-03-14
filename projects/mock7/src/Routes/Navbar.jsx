import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex padding='1rem' bgColor={'black'} color='white' justifyContent={'space-around'}>
        <Text fontSize={'xl'} fontWeight='bold'>Stocks App</Text>
        <Link to='/'>Register</Link>
        <Link to='/login'>Login</Link>
    </Flex>
  )
}

export default Navbar