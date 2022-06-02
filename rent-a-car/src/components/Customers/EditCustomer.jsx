import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { getById,  edit} from '../../repository/Repository';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
}

const EditCustomer = () => {

    const [customer, setCustomer] = useState(initialValue);
    const {fullName, email, phoneNumber} = customer;

    const { id } = useParams();

    useEffect(() => {
        loadCustomerData();
    },[]);

    const loadCustomerData = async () =>{
        const response = await getById("customers", id);
        setCustomer(response.data);
    }

    const history = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setCustomer({...customer, [e.target.name]: e.target.value});
    }

    const editCustomerDetails = async () =>{
       await edit("customers", id ,customer);
       history('/customers');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center" style={{paddingTop : "30px"}}>Update Customer Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="fullName" value={fullName} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} type="email" name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} type="number" name="phoneNumber" value={phoneNumber} />
                </FormControl>
                <div><br /></div>
                <Box my={3}>
                    <Button variant="contained" onClick={() => editCustomerDetails() } color="primary" align="center">Update Customer</Button>
                    <Button onClick={()=> history("/customers")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default EditCustomer;