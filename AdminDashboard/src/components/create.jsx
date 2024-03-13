import { useState } from "react";
import NavBar from "./Navbar";
import '../styles/create.css';

const CreateEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        age: '',
        designation: ''
    });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

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
};

export default CreateEmployee;