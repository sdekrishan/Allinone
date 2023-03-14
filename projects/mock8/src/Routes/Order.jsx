import {  Table, Tbody, Td,  Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const { order } = useSelector((store) => store.order);

  console.log(order);
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Td border='1px solid black' borderRadius={'1rem'}>order No</Td>
            <Td border='1px solid black' borderRadius={'1rem'}>total</Td>
          </Tr>
        </Thead>
        <Tbody>
          {order &&
            order.map((el, ind) => {
              return (
                <Tr key={ind}>
                  <Td border='1px solid black' borderRadius={'1rem'}>{ind + 1}</Td>
                  <Td border='1px solid black' borderRadius={'1rem'}>{el.total}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </>
  );
};

export default Order;
