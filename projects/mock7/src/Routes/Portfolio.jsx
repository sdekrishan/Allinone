import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio = () => {
    const {stock} = useSelector(store=> store.user);
    const randomColor=()=>{
        return `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.random()})`
    }
    const data = {
        labels: stock.map(el=>el.company_name),
        datasets: [
          {
            label: 'Total Shares',
            data: stock.map(el=>el.total),
            backgroundColor:stock.map(el=>randomColor()),
            borderColor:stock.map(el=>randomColor()) ,
            borderWidth: 1,
          },
        ],
      };
      
  return (
    <Flex w='100%' marginInline='auto' border='1px solid black' justifyContent={'space-around'}>
        <Table border='1px solid grey' textAlign={'center'}>
            <Thead>
                <Tr >
            <Th border='1px solid black' bgColor={'lightgreen'}>Company Name</Th>
            <Th border='1px solid black' bgColor={'lightgreen'}>Company's Shares</Th>
            <Th border='1px solid black' bgColor={'lightgreen'}>Total</Th>
                </Tr>
            </Thead>
            <Tbody>
            {stock.map((el,ind)=>(
                <Tr key={ind}>
                    <Td>{el.company_name}</Td>
                    <Td>{el.total}</Td>
                    <Td>{stock.reduce((ac,el)=>el.total+ac,0)}</Td>
                </Tr>
            ))}
            </Tbody>
        </Table>
        <Box w='30%'>
        <Doughnut data = {data}/>
        </Box>
     </Flex>
  )
}

export default Portfolio