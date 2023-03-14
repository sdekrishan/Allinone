import { Flex, Input, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardData from "../Components/DashboardData";
import { getAdminData, postAdminData } from "../Redux/Admin/AdminAction";

const Dashboard = () => {
    const [companyform, setCompanyform] = useState({
    "company_logo": "",
    "company_name": "",
    "company_type": "",
	"stock_exchange": "",
	"total_shares": 0,
	"cost_per_share": 0,
	"price_action": 0,
  });

  const dispatch = useDispatch()

    const handleForm = (e)=>{
        e.preventDefault()
        dispatch(postAdminData({id:Date.now(),...companyform})).then(res=>dispatch(getAdminData()))
    }
    const handleChange = (event)=>{
        let {name,value} = event.target;
        setCompanyform({...companyform,[name]:value})
    }

    
  return (
    <>
    <Text textDecoration={'underline'} fontSize='2xl' >Admin Dashboard</Text>
    <div>
      <Flex
      flexDirection={"column"}
      width="30%"
      m="1rem auto"
      padding="1rem"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <form action="" onSubmit={handleForm} >

        <Input mb='.5rem' name='company_logo' placeholder="Enter Company Logo" onChange={(e)=>handleChange(e)}/>
        <Input mb='.5rem' name='company_name' placeholder="Enter Company Name" onChange={(e)=>handleChange(e)}/>
        <Select mb='.5rem' name="company_type" placeholder="Enter Company Type" onChange={(e)=>handleChange(e)}>
            <option value="Bank">Bank</option>
            <option value="IT">IT</option>
            <option value="Automobile">Automobile</option>
            <option value="Pharma">Pharma</option>
            <option value="Oil">Oil</option>
        </Select>
        <Select mb='.5rem' name="stock_exchange" placeholder="Enter Stock Exchange" onChange={(e)=>handleChange(e)}>
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
           
        </Select>
        <Input mb='.5rem' name='total_shares' placeholder="Enter Company's Total Share" onChange={(e)=>handleChange(e)}/>
        <Input mb='.5rem' name='cost_per_share' placeholder="Enter Cost Per Share" onChange={(e)=>handleChange(e)}/>
        <Input mb='.5rem' name='price_action' placeholder="Enter Price Action" onChange={(e)=>handleChange(e)}/>
        <Input mb='.5rem' value={'List Stock'} bgColor='lavender' type='submit'></Input>
        </form>
      </Flex>

      <DashboardData/>
    </div>
    </>
  );
  
};

export default Dashboard;
