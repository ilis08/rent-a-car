import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { add } from '../../repository/Repository';
import { useNavigate  } from 'react-router-dom';

const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
}

const AddCustomer = () => {

    const [customer, setCustomer] = useState(initialValue);
    const {fullName, email, phoneNumber} = customer;

    const history = useNavigate();

    const onValueChange = (e) =>
    {
        setCustomer({...customer, [e.target.name]: e.target.value});
    }

    const addCustomerDetails = async () =>{
        if(validateCustomer(customer)){
            await add("customers", customer);
            history('/customers');
        }else{
            history('/addCustomer');
        }        
    }

    const validateCustomer = (customer) => {
        if (customer.fullName === "" || customer.email === "" || customer.phoneNumber === ""){
            return false;
        }

        return true;
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center" style={{paddingTop : "30px"}}>Add Customer Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Customer Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)}  name="fullName" value={fullName} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} type="email" name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phoneNumber" value={phoneNumber} />
                </FormControl>
                <div><br /></div>
                <Box my={3}>
                    <Button variant="contained" onClick={() => addCustomerDetails() } color="primary" align="center"
                    disabled={
                        customer.fullName.length !== 0 && customer.email.length !==0 && customer.phoneNumber.length !== 0
                        ? false
                        : true
                    }>Add Customer</Button>
                    <Button onClick={()=> history("/customers")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddCustomer;