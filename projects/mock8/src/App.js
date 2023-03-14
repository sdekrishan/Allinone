import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './App.css';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Flex
        bgColor={"black"}
        padding="1rem"
        mb='1rem'
        justifyContent={"space-evenly"}
        color="white"
      >
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
      </Flex>
    <AllRoutes/>
    </div>
  );
}

export default App;
