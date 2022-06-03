import React, { useEffect, useState } from "react";
import { getAll, remove } from '../../repository/Repository';
import { Link, NavLink } from 'react-router-dom';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: '16px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '16px'
        }
    }
})

const AllVehicles = () => {
    const classes = useStyle();

    const [vehicle, setVehicles] = useState([]);

    useEffect(() => {
        getVehicles();
    }, []);

    const getVehicles = async () => {
        const response = await getAll("vehicles");

        setVehicles(response.data);
    }

    const deleteData = async (id) => {
        await remove("vehicles", id);
        getVehicles();
    }

    return (
        <div>
            <Button variant="contained" color="primary" style={{ margin: '10px 20px' }} component={Link} to={`/addVehicle`}>Add Vehicle</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Construction Year</TableCell>
                        <TableCell>Fuel Type</TableCell>
                        <TableCell>Seats Number</TableCell>
                        <TableCell>Picture</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Vehicle Type</TableCell>
                        <TableCell>Price Per Day</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        vehicle.map((data) => (
                            <TableRow className={classes.trow}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.brand}</TableCell>
                                <TableCell>{data.model}</TableCell>
                                <TableCell>{data.constructionYear}</TableCell>
                                <TableCell>{data.fuelType}</TableCell>
                                <TableCell>{data.seatsNumber}</TableCell>
                                <TableCell>{data.picture}</TableCell>
                                <TableCell>{data.count}</TableCell>
                                <TableCell>{data.vehicleType}</TableCell>
                                <TableCell>{data.pricePerDay}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/rentCar/${data.id}`}
                                    disabled={
                                        data.count > 0 
                                        ? false
                                        : true
                                    }
                                    >Rent</Button>
                                    <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/editVehicle/${data.id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AllVehicles;