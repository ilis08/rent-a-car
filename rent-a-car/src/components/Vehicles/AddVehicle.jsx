import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, Select, MenuItem } from '@material-ui/core';
import { add } from '../../repository/Repository';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    brand: "",
    model: "",
    constructionYear: "",
    fuelType: "",
    seatsNumber: 0,
    picture: "",
    count: 0,
    vehicleType: "",
    pricePerDay: 0,
}

const AddVehicle = () => {

    const [vehicle, setVehicle] = useState(initialValue);
    const { brand, model, constructionYear,
        fuelType, seatsNumber, picture,
        count, vehicleType, pricePerDay } = vehicle;

    const history = useNavigate();

    const onValueChange = (e) => {
        console.log(vehicle);
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    }

    const addVehicleDetails = async () => {
        await add("vehicles", vehicle);
        history('/');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center" style={{ paddingTop: "30px" }}>Add Customer Details</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Brand</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="brand" value={brand} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Model</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="model" value={model} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Construction Year</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="constructionYear" value={constructionYear} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Fuel Type</InputLabel>
                        <Select onChange={(e) => setVehicle({ ...vehicle, fuelType: e.target.value })}>
                            <MenuItem value={"Petrol"}>Petrol</MenuItem>
                            <MenuItem value={"Diesel"}>Diesel</MenuItem>
                            <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                            <MenuItem value={"Electric"}>Electric</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Seats Number</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} type="number" name="seatsNumber" value={seatsNumber} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Picture</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="picture" value={picture} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Count</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} type="number" name="count" value={count} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Vehicle Type</InputLabel>
                        <Select onChange={(e) => setVehicle({ ...vehicle, vehicleType: e.target.value })}>
                            <MenuItem value={"Economy"}>Economy</MenuItem>
                            <MenuItem value={"Estate"}>Estate</MenuItem>
                            <MenuItem value={"Luxury"}>Luxury</MenuItem>
                            <MenuItem value={"SUV"}>SUV</MenuItem>
                            <MenuItem value={"Cargo"}>Cargo</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Price Per Day</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} type="number" name="pricePerDay" value={pricePerDay} />
                    </FormControl>
                    <div><br /></div>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addVehicleDetails()} color="primary" align="center"
                            disabled={
                                vehicle.brand.length !== 0 &&
                                    vehicle.model.length !== 0 &&
                                    vehicle.constructionYear.length !== 0 &&
                                    vehicle.fuelType.length !== 0 &&
                                    parseInt(vehicle.seatsNumber) > 0 &&
                                    parseInt(vehicle.pricePerDay) > 0 &&
                                    parseInt(vehicle.count) > 0 &&
                                    vehicle.vehicleType.length !== 0
                                    ? false
                                    : true
                            }>Add Vehicle</Button>
                        <Button onClick={() => history("/")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default AddVehicle;