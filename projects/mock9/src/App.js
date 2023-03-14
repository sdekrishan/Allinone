import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './App.css';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Flex mb='2rem' padding='1rem' bgColor={'black'} color='white' justifyContent={'space-around'}>
    <Text   fontSize={'2xl'}>Welcome to KKP's Quiz</Text>
    <Flex w='50%' justifyContent={'space-evenly'} alignItems='center'>
      <Link to='/'>Home</Link>
        <Link to='/quiz'>Quiz</Link>
        <Link to='/results'>Results</Link>
        <Link to='/dashboard'>Dashboard</Link>
    </Flex>
    </Flex>
      <AllRoutes/>
    </div>
  );
}

export default App;
