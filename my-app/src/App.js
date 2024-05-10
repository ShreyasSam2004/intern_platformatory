import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import AddEmployeeModal from './components/AddEmployeeModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editEmployee, setEditEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddEmployee = (employee) => {
   
    if (editIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = employee;
      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      
      setEmployees([...employees, employee]);
    }
    
    setIsModalOpen(false);
    
    setEditEmployee(null);
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const handleEditEmployee = (employee, index) => {
    setEditIndex(index);
    setEditEmployee(employee);
    setIsModalOpen(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div style={{ marginRight: '400px', marginTop: '50px', marginBottom: '50px' }}>
        <button onClick={() => {
          setIsModalOpen(true);
          setEditIndex(null);
          setEditEmployee(null);
        }}>Add Employee</button>
      </div>
      <div style={{ marginLeft: '350px', marginTop: '50px' }}>
        <AddEmployeeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddEmployee}
          editEmployee={editEmployee} 
        />
      </div>
      <div style={{ marginLeft: '350px', marginRight: '100px' }}>
        <div style={{marginRight : '600px'}}>
          
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        </div>
        <h2>Employees:</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.mobile}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.salary}</td>
                <td>
                  <div style={{display : 'flex' , justifyContent : 'space-around' , alignItems: 'center'}}>
                  <div style={{marginRight : '15px'}}><button onClick={() => handleEditEmployee(employee, index)}>Edit</button></div>
                  <button onClick={() => handleDeleteEmployee(index)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
