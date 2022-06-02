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

const AllCustomers = () => {
    const classes = useStyle();

    const [customer, setCustomers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await getAll("customers");

        setCustomers(response.data);
    }

    const deleteData = async (id) => {
        await remove("customers", id);
        getUsers();
    }

    return (
        <div>
            <Button variant="contained" color="primary" style={{ margin: '10px 20px' }} component={Link} to={`/addCustomer`}>Add Customer</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        customer.map((data) => (
                            <TableRow className={classes.trow}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.fullName}</TableCell>
                                <TableCell>{data.phoneNumber}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/editCustomer/${data.id}`}>Edit</Button>
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

export default AllCustomers;