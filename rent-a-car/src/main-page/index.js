import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Route>
      <div className="container">
        <Header/>

        <Route path="/" element={<Vehicles/>} />
        <Router path="/customers" element={<Customers/>}/>
      </div>
    </Route>
  );
}

export default App;
