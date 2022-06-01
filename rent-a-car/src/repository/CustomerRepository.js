import axios from "axios";

const jsonServerUrl = "customers";

export default class CustomerRepository{
    static async getAll(){
        const response = await axios.get(`${jsonServerUrl}`);

        return response.data;
    }

    static async getById(id){
        const response = await axios.get(`${jsonServerUrl}/${id}`);
    }

    static async create(customer){
        await axios.post(`${jsonServerUrl}`, customer);
    }

    static async update(customer, id){
        await axios.update(`${jsonServerUrl}/${id}`, customer);
    }

    static async delete(id){
        await axios.delete(`${jsonServerUrl}/${id}`);
    }
}