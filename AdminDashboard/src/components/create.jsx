import { useState } from "react";
import NavBar from "./Navbar";
import '../styles/create.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {
    const history = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        age: '',
        designation: ''
    });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            
            await axios.post('http://localhost:5000/create', {
                name: employee.name,
                age: employee.age,
                designation: employee.designation,
            }).then((res) => {
                if (res.data === 'Employee Created') {
                    alert('Employee Created');
                    history('/emplist');
                } else {
                    alert('Employee Creation Failed');
                }
            }).catch((err) => {
                console.log(err);
            });

        } catch (error) {
            console.error('Error creating employee', error);
        }
    }

    return (
        <>
        <NavBar />
        <div className="create">
            <h2>Create Employee</h2>
            <form className="createForm" onSubmit={handleSubmit}>
                <label>
                    <p>Name:</p>
                    <input type="text" name="name" value={employee.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                <p>Age:</p>
                    <input type="number" name="age" value={employee.age} onChange={handleChange} />
                </label>
                <br />
                <label>
                    <p>Designation:</p>
                    <input type="text" name="designation" value={employee.designation} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
        </>
    );
}

export default CreateEmployee;