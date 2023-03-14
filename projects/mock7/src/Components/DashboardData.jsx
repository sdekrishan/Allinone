import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminData, EditAdminData, getAdminData } from "../Redux/Admin/AdminAction";

const DashboardData = () => {
  const { data } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [companyform, setCompanyform] = useState({
    "company_logo": "",
    "company_name": "",
    "company_type": "",
	"stock_exchange": "",
	"total_shares": 0,
	"cost_per_share": 0,
	"price_action": 0,
  });
 
  const handleDelete = (id) => {
    dispatch(deleteAdminData(id)).then((res) => dispatch(getAdminData()));
  };
  const handleChange = (event)=>{
    let {name,value} = event.target;
    setCompanyform({...companyform,[name]:value})
}

const handleEdit = (el) => {
  setCompanyform({...el})
    onOpen();

};

useEffect(() => {
    dispatch(getAdminData());
}, []);

const handlePatch =(id )=>{
  console.log(companyform);
    dispatch(EditAdminData(id,companyform)).then(res=> dispatch(getAdminData()));
    onClose()
}

  return (
    <div>
      <Table>
        <Thead>
          <Tr >
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Company Logo</Th>
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Company Name</Th>
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Company Type</Th>
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Stock Exchange</Th>
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Total Shares</Th>
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Cost Per Share</Th>
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Price Action</Th>
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Edit Stock</Th>
            <Th bgColor={'lightgoldenrodyellow'} mr='.5rem'>Delete Stock</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((el, ind) => {
              return (
                <Tr key={ind} >
                  <Td border='1px solid grey'>
                    <Image src={el.company_logo} width="340px" height={'auto'} m="auto"></Image>
                  </Td>
                  <Td>{el.company_name}</Td>
                  <Td>{el.company_type}</Td>
                  <Td>{el.stock_exchange}</Td>
                  <Td>{el.total_shares}</Td>
                  <Td>{el.cost_per_share}</Td>
                  <Td>{el.price_action}</Td>
                  <Td>
                    <Button onClick={()=>handleEdit(el)}>Edit</Button>
                  </Td>
                  <Td>
                    <Button onClick={() => handleDelete(el.id)}>Delete</Button>
                  </Td>
                  <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Company</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
        <Input value={companyform.company_logo}  name='company_logo' placeholder="Enter Company Logo" onChange={(e)=>handleChange(e)}/>
        <Input value={companyform.company_name}  name='company_name' placeholder="Enter Company Name" onChange={(e)=>handleChange(e)}/>
        <Select value={companyform.company_type} name="company_type" placeholder="Enter Company Type" onChange={(e)=>handleChange(e)}>
            <option  value="Bank">Bank</option>
            <option  value="IT">IT</option>
            <option  value="Automobile">Automobile</option>
            <option  value="Pharma">Pharma</option>
            <option  value="Oil">Oil</option>
        </Select>
        <Select value={companyform.stock_exchange} name="stock_exchange" placeholder="Enter Stock Exchange" onChange={(e)=>handleChange(e)}>
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
           
        </Select>
        <Input value={companyform.total_shares}  name='total_shares' placeholder="Enter Company's Total Share" onChange={(e)=>handleChange(e)}/>
        <Input value={companyform.cost_per_share}  name='cost_per_share' placeholder="Enter Cost Per Share" onChange={(e)=>handleChange(e)}/>
        <Input value={companyform.price_action}  name='price_action' placeholder="Enter Price Action" onChange={(e)=>handleChange(e)}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={()=>handlePatch(el.id)}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
      
    </div>
  );
};

export default DashboardData;
