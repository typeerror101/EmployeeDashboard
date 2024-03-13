import { useState } from 'react';
import '../styles/empList.css';
import NavBar from './Navbar';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
    const history = useNavigate();
    const [employees] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleEdit = (id) => {
        // Handle edit logic here
        console.log(`Editing employee with ID ${id}`);
    };

    const handleDelete = (id) => {
        // Handle delete logic here
        console.log(`Deleting employee with ID ${id}`);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCreateEmployee = () => {
        history('/create');
    };

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <NavBar/>
        <div className='emp'>
            <h2>Employee List</h2>

            <div>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
            <button onClick={handleCreateEmployee} className='createBTN'>Create Employee</button>
            </div>

            <div>
            <ul>
                {filteredEmployees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name}
                        <button onClick={() => handleEdit(employee.id)}>Edit</button>
                        <button onClick={() => handleDelete(employee.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
        </>
    );
}

export default EmployeeList;