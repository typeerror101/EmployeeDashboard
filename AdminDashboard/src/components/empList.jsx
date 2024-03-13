import { useState, useEffect } from 'react';
import '../styles/empList.css';
import NavBar from './Navbar';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
    const history = useNavigate();
    const [employees, setEmployees] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    async function handleEdit(id) {
        // Handle edit logic here
        console.log(`Editing employee with ID ${id}`);
    }

    async function handleDelete(id) {
        try {
           
            await fetch(`http://localhost:5000/employees/${id}`, {
                method: 'DELETE',
            }).then((res) => {
                if (res.data === 'Employee Deleted') {
                    alert(`Employee ${res.json.name} is Deleted`);
                } else {
                    alert('Employee Deletion Failed');
                }
            }).catch((err) => {
                console.log(err);
            });

            setEmployees(employees.filter((employee) => employee.id !== id));

        } catch (error) {
            console.error('Error deleting employee', error);
        }   

        console.log(`Deleting employee with ID ${id}`);
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCreateEmployee = () => {
        history('/create');
    };

    // const filteredEmployees = employees.filter((employee) =>
    //     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    useEffect(
        () => {
            const getEmployeesData = async () => {
                const employeesFromServer = await getEmployees();
                setEmployees(employeesFromServer);
            };

            getEmployeesData();
        },
        []
    );  

    async function getEmployees() {
        const response = await fetch('http://localhost:5000/employees');
        const data = await response.json();
        return data;
    }

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
                    {employees.length > 0 &&
                        employees.map((emp) => (
                            <div key={emp._id}>
                                {[emp.name, emp.age, emp.designation]} 
                                <button onClick={() => handleEdit(emp._id)}>Edit</button>
                                <button onClick={() => handleDelete(emp._id)}>Delete</button>
                            </div>
                        ))}
                </ul>
            </div>
        </div>
        </>
    );
}

export default EmployeeList;