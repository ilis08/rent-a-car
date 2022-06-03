import './main-page.css';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllCustomers from '../components/Customers/AllCustomers';
import AddCustomer from '../components/Customers/AddCustomer';
import EditCustomer from '../components/Customers/EditCustomer';
import AllVehicles from '../components/Vehicles/AllVehicles';
import AddVehicle from '../components/Vehicles/AddVehicle';
import EditVehicle from '../components/Vehicles/EditVehicle';
import AllRentals from '../components/Rental/AllRentals';
import RentCar from '../components/Rental/RentCar';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<AllVehicles />} />
          <Route path="/customers" element={<AllCustomers />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path='/editCustomer/:id' element={<EditCustomer />} />
          <Route path="/addVehicle" element={<AddVehicle />} />
          <Route path='/editVehicle/:id' element={<EditVehicle />} />
          <Route path='/rentals' element={<AllRentals />}></Route>
          <Route path='/rentCar/:id' element={<RentCar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
