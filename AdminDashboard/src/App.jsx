import './App.css'
import Home from "./components/home";
import Login from "./components/login";
import EmployeeList from './components/empList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './components/create';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/emplist" element={<EmployeeList />} />
            <Route path='/create' element={<CreateEmployee/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
